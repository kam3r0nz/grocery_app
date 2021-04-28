export function fetchCarts(userId) {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/users/${userId}/carts`)
            .then(resp => resp.json())
            .then(cart => dispatch({type: 'ADD_TO_CART', cart}))
    }
}