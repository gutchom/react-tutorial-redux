import React from 'react'
import ReactDOM from 'react-dom'

class CommentBox extends React.Component {
  render() {
    return (
      <div className='comment__box'>
        Hello, world! I am a CommentBox.
      </div>
    )
  }
}

ReactDOM.render(
  <CommentBox/>
  ,document.getElementById('content')
)
