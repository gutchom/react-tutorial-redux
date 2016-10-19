import React, { Component, PropTypes } from 'react'
import axios from 'axios'
import CommentList from './CommentList'
import CommentForm from './CommentForm'

const defaultProps = {
  url: '/api/comments',
  pollInterval: 2000,
}

const propTypes = {
  url: PropTypes.string,
  pollInterval: PropTypes.number,
}

class CommentBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }
  componentDidMount() {
    this.loadCommentsFromServer()
    setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval)
  }
  loadCommentsFromServer() {
    axios.get(this.props.url)
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err))
  }
  handleCommentSubmit(comment) {
    comment.id = Date.now()
    const comments = this.state.data
    const newComments = [...comments, comment]
    this.setState({ data: newComments })
    axios.post(this.props.url, comment)
      .then(res => this.setState({ data: res.data }))
      .catch((err) => {
        this.setState({ data: comments })
        console.log(err)
      })
  }
  render() {
    return (
      <div className="comment__box">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={comment => this.handleCommentSubmit(comment)} />
      </div>
    )
  }
}

CommentBox.defaultProps = defaultProps
CommentBox.propTypes = propTypes

export default CommentBox
