import React from 'react'
import { connect } from 'react-redux'
import { findOrCreateUser } from '../actions/userActions'

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

    handleOnChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.findOrCreateUser(e)
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

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { findOrCreateUser })(User)