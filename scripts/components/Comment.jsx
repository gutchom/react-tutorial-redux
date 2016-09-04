import React from 'react'

class Comment extends React.Component {
  render() {
    return (
      <div className='comment'>
        <h2 className='comment__author'>
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    )
  }
}

export default Comment
