import React from 'react'
import Remarkable from 'remarkable'

class Comment extends React.Component {
  render() {
    let md = new Remarkable()
    return (
      <div className='comment'>
        <h2 className='comment__author'>
          {this.props.author}
        </h2>
        {md.render(this.props.children.toString())}
      </div>
    )
  }
}

export default Comment
