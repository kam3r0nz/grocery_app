import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    products: productsReducer
})

export default rootReducer

function userReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_USER':
            return action.user
        default:
            return state
    }
}

function cartReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_CART':
            return action.cart
        case 'REMOVE_FROM_CART':
            return state
        default:
            return state
    }
}

function productsReducer(state = [], action) {
    switch(action.type) {
        case 'FETCH_PRODUCTS':
            return [...state]
        case 'ADD_PRODUCTS':
            return action.products
        default:
            return state
    }
    
}