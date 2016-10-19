import React, { PropTypes } from 'react'
import CommentListContainer from '../containers/ComentListContainer'
import CommentFormContainer from '../containers/CommentFormContainer'

const defaultProps = {
  pollInterval: 2000,
}

const propTypes = {
  pollInterval: PropTypes.number,
}

function CommentBox({ pollInterval }) {
  return (
    <div className="comment__box">
      <h1>Comments</h1>
      <CommentListContainer pollInterval={pollInterval} />
      <CommentFormContainer />
    </div>
  )
}

CommentBox.defaultProps = defaultProps
CommentBox.propTypes = propTypes

export default CommentBox
