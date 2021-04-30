export function fetchProducts() {
    return dispatch => {
        dispatch({type: 'FETCH_PRODUCTS'})
        fetch('http://localhost:3001/api/v1/products')
            .then(resp => resp.json())
            .then(products => dispatch({type: 'ADD_PRODUCTS', products}))
    }
}

export function addToCart(userId, cartId, product) {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/users/${userId}/carts/${cartId}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({cart: product})})
                .then(resp => resp.json())
                .then(product => console.log(product))
    }
}

export function removeFromCart(userId, cartId, productId) {
    return dispatch => {
        fetch()
    }

}