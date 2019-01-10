import React from 'react'

function Comment({ comment }) {
  return (
    <div>
      <div><b>{comment.user}</b></div>
      {comment.text}
    </div>
  )
}

export default Comment