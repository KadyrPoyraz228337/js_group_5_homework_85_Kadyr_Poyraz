import {FETCH_USER_ERROR, FETCH_USER_SUCCESS, LOGOUT_USER_SUCCESS} from "../actions/userActions";

const INITIAL_STATE = {
  user: null,
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
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        user: null
      };
    default: return state;
  }
};

export default userReducer;