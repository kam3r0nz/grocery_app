import React from 'react'
import { connect } from 'react-redux'
import { findOrCreateUser } from '../actions/userActions'
import { fetchCart, findOrCreateCart } from '../actions/cartActions'

class User extends React.Component {

    constructor() {
        super()
        this.state = {
            name: ''
        }
    }

    fetchCart() {
        this.props.findOrCreateCart(this.props.user.id, this.props.cart)
    }

    handleOnChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        const user = this.state
        this.props.findOrCreateUser(user)
        this.fetchCart()
    }

    render() {
        if (this.props.user.length === 0) {
            return (
                < >
                    <h1>Welcome to Grocery!</h1>
                    <p className="p-text">Please enter your name below to begin shopping and retrieve your cart.</p>
                    <div className="user-form">
                        <form onSubmit={this.handleOnSubmit}>
                            <input type="text" onChange={this.handleOnChange} name="name" placeholder="Enter name"/>
                            <input type="submit"/>
                        </form>
                    </div>
                </ >
            )
        } else {
            return (
                <div className="user-container">
                    <h1>Hi {this.props.user.name}!</h1>
                    <p className="p-text">Please click products to begin shopping.</p>
                </div>
            )
        }
    }

}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { findOrCreateUser, fetchCart, findOrCreateCart })(User)