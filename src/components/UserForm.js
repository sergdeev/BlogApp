import React, { Component } from 'react'

export default class UserForm extends Component {
  constructor() {
    super()
    this.state = {
      userName: ''
    }
  }

  handleUserChange = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  render() {
    return (
      <div>
        UserName:
        <input value={this.state.userName} onChange={this.handleUserChange} />
      </div>
    )
  }
}
