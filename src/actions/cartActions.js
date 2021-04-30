export function fetchCart(userId) {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/users/${userId}/carts`)
            .then(resp => resp.json())
            .then(carts => dispatch({type: 'ADD_CART', carts}))
    }
}

export function findOrCreateCart(userId, cart) {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/users/${userId}/carts`, {
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