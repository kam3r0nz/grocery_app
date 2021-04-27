export function fetchProducts() {
    return dispatch => {
        dispatch({type: 'FETCH_PRODUCTS'})
        fetch('http://localhost:3001/api/v1/products')
            .then(resp => resp.json())
            .then(products => dispatch({type: 'ADD_PRODUCTS', products}))
    }
}