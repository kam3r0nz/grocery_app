export function findOrCreateUser(user) {
    return dispatch => {
        fetch('http://localhost:3001/api/v1/users', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify({user: user})})
            .then(resp => resp.json())
            .then(user => console.log(user))
    }
}
