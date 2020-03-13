import {FETCH_ARTISTS_SUCCESS} from "../actions/artistsActions";

const INITIAL_STATE = {
  artists: null
};

const artistsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ARTISTS_SUCCESS:
      return {
        ...state,
        artists: action.artists
      };
    default: return state;
  }
};

export default artistsReducer;