import React from 'react'
import Comment from './Comment'

class CommentList extends React.Component {
  render() {
    let commentNodes = this.props.data.map(comment => {
      return(
        <Comment author={comment.author} key={comment.id} >
          {comment.text}
        </Comment>
      )
    })
    return(
      <div className='comment__list'>
        {commentNodes}
      </div>
    )
  }
}

export default CommentList
