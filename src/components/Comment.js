import React from 'react';
import { connect } from 'react-redux';
import { createCommentSelector } from '../selectors'


function Comment({ comment }) {
  return (
    <div>
      <div><b>{comment.user}</b></div>
      {comment.text}
    </div>
  )
}


const createMapStateToProps = () => {
  const commentSelector = createCommentSelector()

  return (state, ownProps) => ({
    comment: commentSelector(state, ownProps)
  })
}

export default connect(createMapStateToProps)(Comment)