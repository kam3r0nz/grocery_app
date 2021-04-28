import React from 'react'

class User extends React.Component {

    constructor(user) {
        super()
        this.id = user.id
        this.name = user.name
        this.cart = user.cart
        this.state = {
            name: ''
        }
    }

    findOrCreateUser(e) {
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

    handleOnChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.findOrCreateUser(e)
            .then(user => new User(user))
    }

    render() {
        return (
            <div className="user-form">
                <form onSubmit={this.handleOnSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" onChange={this.handleOnChange} name="name"/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }

}

export default User