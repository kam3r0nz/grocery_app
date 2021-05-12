export function cartReducer(state = {products: [], total: 0}, action) {
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