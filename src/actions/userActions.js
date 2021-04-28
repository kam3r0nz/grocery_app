export function findOrCreateUser(e) {
    return fetch('http://localhost:3001/api/v1/users', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                },
                body: JSON.stringify({user: {name: e.target.value}})
                     
        })
                .then(resp => {
                    return resp.json()
                })
}