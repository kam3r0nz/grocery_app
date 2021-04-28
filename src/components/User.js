import React from 'react'
import { connect } from 'react-redux'
import { findOrCreateUser } from '../actions/userActions'

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
        users: state.users
    }
}

export default connect(mapStateToProps, { findOrCreateUser })(User)