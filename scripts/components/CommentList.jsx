import React from 'react'
import Comment from './Comment'

class CommentList extends React.Component {
  render() {
    return(
      <div className='comment__list'>
        <Comment author='Pete Hunt'>This is one comment</Comment>
        <Comment author='Jordan Walke'>This is *another* comment</Comment>
      </div>
    )
  }
}

export default CommentList
