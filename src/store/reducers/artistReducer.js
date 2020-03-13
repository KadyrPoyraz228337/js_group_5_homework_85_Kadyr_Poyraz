import {FETCH_ARTIST_SUCCESS} from "../actions/artistActions";

const INITIAL_STATE = {
  albums: null
};

const artistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ARTIST_SUCCESS:
      return {
        ...state,
        albums: action.albums
      };
    default: return state;
  }
};

export default artistReducer;