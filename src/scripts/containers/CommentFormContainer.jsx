import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { postComment } from '../actions'
import CommentForm from '../components/CommentForm'

const propTypes = {
  postComment: PropTypes.func,
}

const mapDispatchToProps = dispatch => ({
  postComment: comment => dispatch(postComment(comment)),
})

function container(props) {
  return (
    <CommentForm onCommentSubmit={comment => props.postComment(comment)} />
  )
}

container.propTypes = propTypes

const CommentFormContainer = connect(
  null,
  mapDispatchToProps
)(props => container(props))

export default CommentFormContainer
