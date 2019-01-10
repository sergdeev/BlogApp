import React from 'react';
import { connect } from 'react-redux';


function Comment({ comment }) {
  return (
    <div>
      <div><b>{comment.user}</b></div>
      {comment.text}
    </div>
  )
}

export default connect((state, ownProps) => ({
  comment: state.comments.find(comment => comment.id === ownProps.id)
}))(Comment);