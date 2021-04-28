import React from 'react'

class UserInput extends React.Component {

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name"/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }


}

export default UserInput