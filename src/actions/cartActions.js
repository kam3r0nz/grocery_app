export function fetchCart(userId) {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/users/${userId}/carts`)
            .then(resp => resp.json())
            .then(cart => dispatch({type: 'ADD_TO_CART', cart}))
    }
}

export function findOrCreateCart(cart) {
    return dispatch => {
        fetch('http://localhost:3001/api/v1/products', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify({cart: cart})})
                .then(resp => resp.json())
                .then(cart => console.log(cart))
    }
}