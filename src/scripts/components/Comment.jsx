import React, { Component, PropTypes } from 'react'
import Remarkable from 'remarkable'

const propTypes = {
  author: PropTypes.string,
  children: PropTypes.string,
}

class Comment extends Component {
  rawMarkup() {
    const md = new Remarkable()
    const rawMarkup = md.render(this.props.children.toString())
    return { __html: rawMarkup }
  }
  render() {
    return (
      <div className="comment">
        <h2 className="comment__author">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    )
  }
}

Comment.propTypes = propTypes

export default Comment
