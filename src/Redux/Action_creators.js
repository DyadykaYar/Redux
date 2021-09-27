import {
    PRODUCTS_ARE_LOADED,
    DIFFERENT_PRODUCT_ARE_LOADED,
    ADD_TO_CART,
    REMOVE_FROM_CART
} from "./Action_types";

let products_are_loaded = (payload) => ({type: PRODUCTS_ARE_LOADED, payload})
let different_product_are_loaded = (payload) => ({type: DIFFERENT_PRODUCT_ARE_LOADED, payload})
let add_to_cart = (payload) => ({type: ADD_TO_CART, payload})

export {
    products_are_loaded,
    different_product_are_loaded,
    add_to_cart
}