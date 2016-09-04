import React from 'react'
import ReactDOM from 'react-dom'
import CommentList from './components/CommentList'
import CommentForm from './components/CommentForm'

class CommentBox extends React.Component {
  render() {
    return (
      <div className='comment__box'>
        <h1>Comments</h1>
        <CommentList/>
        <CommentForm/>
      </div>
    )
  }
}

ReactDOM.render(
  <CommentBox/>
  ,document.getElementById('content')
)
