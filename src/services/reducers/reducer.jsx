import { ADD_TO_CART, REMOVE_TO_CART } from "../Constant";

const initialState = {
    cartData: []
}

export default function cartItem(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.log("add reducer", action.data)
            return [
                ...state,
                {cartData: action.data}
            ]
            case REMOVE_TO_CART:
            console.log("remove reducer", action.data)
            state.pop();
            return [
                ...state,
            ]
        default:
            return state;
    }
}