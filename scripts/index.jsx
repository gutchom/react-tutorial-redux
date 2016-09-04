import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import CommentList from './components/CommentList'
import CommentForm from './components/CommentForm'

class CommentBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    this.loadCommentsFromServer()
    setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval)
  }
  loadCommentsFromServer() {
    axios.get(this.props.url)
      .then( res => this.setState({ data: res.data }) )
      .catch( err => console.log(err) )
  }
  render() {
    return (
      <div className='comment__box'>
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm/>
      </div>
    )
  }
}

ReactDOM.render(
  <CommentBox url='/api/comments' pollInterval={2000} />
  ,document.getElementById('content')
)
