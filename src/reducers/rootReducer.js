import userReducer from './userReducer'
import cartReducer from './cartReducer'
import productsReducer from './productsReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    products: productsReducer
})

export default rootReducer