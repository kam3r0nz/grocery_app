import React from 'react'
import { connect } from 'react-redux'
import { findOrCreateUser } from '../actions/userActions'
import { fetchCart } from '../actions/cartActions'

class User extends React.Component {

    constructor() {
        super()
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
        const user = this.state
        this.props.findOrCreateUser(user)
        this.props.fetchCart(user.id)
    }

    render() {
        if (this.props.user.length === 0) {
            return (
                <div className="user-form">
                    <form onSubmit={this.handleOnSubmit}>
                        <input type="text" onChange={this.handleOnChange} name="name" placeholder="Enter name"/>
                        <input type="submit"/>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="user-container">
                    <h1>Hi {this.props.user.name}</h1>
                    <p>Please click products to begin shopping!</p>
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

export default connect(mapStateToProps, { findOrCreateUser, fetchCart })(User)