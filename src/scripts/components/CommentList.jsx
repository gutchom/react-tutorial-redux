import React, { PropTypes } from 'react'
import Comment from './Comment'

const defaultProps = {
  data: [],
}

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
}

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

CommentList.defaultProps = defaultProps
CommentList.propTypes = propTypes

export default CommentList
