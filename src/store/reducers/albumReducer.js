import {FETCH_ALBUM_SUCCESS} from "../actions/albumActions";

const INITIAL_STATE = {
  tracks: null
};

const albumReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ALBUM_SUCCESS:
      return {
        ...state,
        tracks: action.tracks
      };
    default: return state
  }
};
export default albumReducer;