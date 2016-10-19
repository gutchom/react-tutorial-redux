import {
  AJAX_COMMENT,
  FETCH,
  SUCESS,
  FAILUR,
} from '../constants'

const initialState = {
  comments: [],
  isFetching: false,
}

export default function comments(state = initialState, action) {
  if (action.type === AJAX_COMMENT) {
    switch (action.status) {
      case FETCH:
        return {
          comments: state.comments,
          isFetching: true,
        }
      case FAILUR:
        return {
          comments: state.comments,
          isFetching: false,
        }
      case SUCESS:
        return {
          comments: action.data,
          isFetching: false,
        }
      default:
        return state
    }
  }
  return state
}
