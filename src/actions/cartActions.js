export function fetchCarts(userId) {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/users/${userId}/carts`)
            .then(resp => resp.json())
            .then(carts => console.log(carts))
    }
}