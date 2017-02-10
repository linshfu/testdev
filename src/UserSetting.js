import React from 'react'

export default class UserSetting extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: 'User'
        }
    }

    render() {
        return (
            <div>
                <h2>{this.state.data}</h2>
                <p>{this.state.data}</p>
                <p>{this.state.data}</p>
            </div>
        )
    }
}
