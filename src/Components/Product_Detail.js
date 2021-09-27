import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {add_to_cart, different_product_are_loaded} from "../Redux/Action_creators";

export let Product_Detail = () => {

    let {id} = useParams();
    let dispatch = useDispatch();
    let {title, description, image} = useSelector(
        (state) => state.products_reducer.different_product);

    let fetchProductDifferent = async () => {
        try {
            let response = await fetch(`https://fakestoreapi.com/products/${id}`)
            let json = await response.json();
            dispatch(different_product_are_loaded(json));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProductDifferent()
    },[])


    return (<div className="product_detail_page">
        <div key={id} className="product_detail">
                <div>
                    <h2>{title}</h2>
                    <img src={image}/>
                </div>
                <div>
                    <p>{description}</p>
                </div>
                <button onClick={() => dispatch(add_to_cart(id))}>Buy</button>
        </div>
            </div>)
}