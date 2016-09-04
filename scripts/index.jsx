import React from 'react'
import ReactDOM from 'react-dom'
import CommentList from './components/CommentList'
import CommentForm from './components/CommentForm'

let data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
]

class CommentBox extends React.Component {
  render() {
    return (
      <div className='comment__box'>
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm/>
      </div>
    )
  }
}

ReactDOM.render(
  <CommentBox data={data} />
  ,document.getElementById('content')
)
