import React from "react";
import {useSelector} from "react-redux";

export let Cart = () => {

    let {id, title, description, image} = useSelector(
        (state) => state.products_reducer.cart_products_list)

    return (<div>
        <div key={id}>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    </div>)
}