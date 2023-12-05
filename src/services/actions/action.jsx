import {ADD_TO_CART, REMOVE_TO_CART} from "../Constant";

export const addToCart = (data) => {
    console.log("add", data);
    return {
        type: ADD_TO_CART,
        data: data
    }
}

export const removeToCart = () => {
    console.log("remove");
    return {
        type: REMOVE_TO_CART,
    }
}
