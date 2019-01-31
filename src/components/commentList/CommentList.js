import React, { Component } from 'react'
import Comment from '../Comment'
import ToggleOpen from '../../HOC/ToggleOpen'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'
import CommentForm from '../commentForm'

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }

  getBody() {
    const {
      article: { comments = [], id },
      isOpen
    } = this.props
    if (!isOpen) return null

    const body =
      comments && comments.length ? (
        <ul>
          {this.props.article.comments.map((id) => (
            <li key={id}>
              <Comment id={id} />
            </li>
          ))}
        </ul>
      ) : (
        <h3>No comments yet</h3>
      )

    return (
      <div>
        {body}
        <CommentForm articleId={id} />
      </div>
    )
  }

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen}>{text}</button>
        <CSSTransition
          transitionName="comments"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.getBody()}
        </CSSTransition>
      </div>
    )
  }
}

export default ToggleOpen(CommentList)
