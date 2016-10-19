import axios from 'axios'
import {
  URL_API,
  AJAX_COMMENT,
  FETCH,
  SUCESS,
  FAILUR,
} from '../constants'

function request() {
  return {
    type: AJAX_COMMENT,
    status: FETCH,
  }
}

function failure(data) {
  return {
    type: AJAX_COMMENT,
    status: FAILUR,
    data,
  }
}

function recieve(data) {
  return {
    type: AJAX_COMMENT,
    status: SUCESS,
    data,
  }
}

export function getComments() {
  return (dispatch) => {
    dispatch(request())
    axios.get(URL_API)
      .then(res => dispatch(recieve(res.data)))
      .catch(err => dispatch(failure(err)))
  }
}

export function postComment(comment) {
  return (dispatch) => {
    dispatch(request())
    axios.post(URL_API, comment)
      .then(res => dispatch(recieve(res.data)))
      .catch(err => dispatch(failure(err)))
  }
}
