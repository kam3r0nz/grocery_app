import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer
})

export default rootReducer

function cartReducer(state = [], action){
    switch(action.type) {
        case 'ADD_TO_CART':
            return [...state, action.product
            ]
        default:
            return state
    }
}

function productsReducer(state = [], action){
    switch(action.type) {
        case 'FETCH_PRODUCTS':
            return [...state]
        case 'ADD_PRODUCTS':
            return action.products
        default:
            return state
    }
    
}