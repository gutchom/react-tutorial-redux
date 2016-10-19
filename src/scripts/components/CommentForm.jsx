import React, { Component, PropTypes } from 'react'

const propTypes = {
  onCommentSubmit: PropTypes.func,
}

class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      author: '',
      text: '',
    }
  }
  handleAuthorChange(e) {
    this.setState({ author: e.target.value })
  }
  handleTextChange(e) {
    this.setState({ text: e.target.value })
  }
  handleSubmit(e) {
    e.preventDefault()
    const author = this.state.author.trim()
    const text = this.state.text.trim()
    if (!text || !author) {
      return
    }
    this.props.onCommentSubmit({ author, text })
    this.setState({ author: '', text: '' })
  }
  render() {
    return (
      <form className="comment__form" onSubmit={e => this.handleSubmit(e)}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={e => this.handleAuthorChange(e)}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={e => this.handleTextChange(e)}
        />
        <input type="submit" value="Post" />
      </form>
    )
  }
}

CommentForm.propTypes = propTypes

export default CommentForm
