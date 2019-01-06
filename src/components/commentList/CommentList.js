import React, { Component } from 'react'
import Comment from '../Comment'
import ToggleOpen from '../../HOC/ToggleOpen'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'

class CommentList extends Component {
  static defaultProps = {
    comments: []
  };

  getBody() {
    const { comments, isOpen } = this.props;
    if (!isOpen) return null;

    const body = (comments && comments.length) ? (
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    ) : (
      <h3>No comments yet</h3>
    )

    return <div>{body}</div>
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