import {FETCH_USER_ERROR, FETCH_USER_SUCCESS} from "../actions/userActions";

const INITIAL_STATE = {
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.user
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        error: action.error.response.data.message
      };
    default: return state;
  }
};

export default userReducer;