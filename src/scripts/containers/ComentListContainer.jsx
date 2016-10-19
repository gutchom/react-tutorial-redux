import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getComments } from '../actions'
import CommentList from '../components/CommentList'

const defaultProps = {
  comments: [],
}

const propTypes = {
  pollInterval: PropTypes.number,
  comments: PropTypes.arrayOf(PropTypes.object),
  getComments: PropTypes.func,
}

const mapStateToProps = state => ({
  comments: state.comments,
})

const mapDispatchToProps = dispatch => ({
  getComments: () => dispatch(getComments()),
})

class CommentListContainer extends Component {
  componentDidMount() {
    this.fetchComments()
    setInterval(this.fetchComments.bind(this), this.props.pollInterval)
  }
  fetchComments() {
    this.props.getComments()
  }
  render() {
    return (
      <CommentList data={this.props.comments} />
    )
  }
}

CommentListContainer.defaultProps = defaultProps
CommentListContainer.propTypes = propTypes

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentListContainer)
