import React from 'react'
import Comment from './Comment'

function CommentList({ data }) {
  return (
    <div className="comment__list">
      {data.map(comment => (
        <Comment author={comment.author} key={comment.id} >
          {comment.text}
        </Comment>
      ))}
    </div>
  )
}

export default CommentList
