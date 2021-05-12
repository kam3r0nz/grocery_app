import { combineReducers } from 'redux'

let price

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    products: productsReducer
})

export default rootReducer



function cartReducer(state = {products: [], total: 0}, action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            price = Number(action.product.price)
            return { ...state, 
                products: [...state.products, action.product],
                total: state.total + price
            }
        case 'REMOVE_FROM_CART':
            price = Number(action.product.price)
            return { ...state, 
                products: state.products.filter(product => product.id !== action.product.id),
                total: state.total - price
            }
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