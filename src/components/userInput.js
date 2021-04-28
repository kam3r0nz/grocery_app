import React from 'react'

class UserInput extends React.Component {

    state = {
        name: ''
    }

    handleOnChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" onChange={this.handleOnChange} name="name"/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }

}

export default UserInput