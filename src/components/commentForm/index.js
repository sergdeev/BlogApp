import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../../actions'

class CommentForm extends Component {
  state = {
    user: '',
    text: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addComment(this.state)
    this.setState({
      user: '',
      text: ''
    })
  }

  handleChange = (type) => (event) => {
    const { value } = event.target
    this.setState({
      [type]: value
    })
  }

  render() {
    const { user, text } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        user: <input value={user} onChange={this.handleChange('user')} />
        comment: <input value={text} onChange={this.handleChange('text')} />
        <input type="submit" value="submit" />
      </form>
    )
  }
}

export default connect(
  null,
  (dispatch, ownProps) => ({
    addComment: (comment) => dispatch(addComment(comment, ownProps.articleId))
  })
)(CommentForm)
