import {FETCH_TRACK_HISTORY_SUCCESS} from "../actions/trackHistoryActions";

const INITIAL_STATE = {
  tracks: null
};

const trackHistoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TRACK_HISTORY_SUCCESS:
      return {
        ...state,
        tracks: action.tracks
      };
    default: return state;
  }
};

export default trackHistoryReducer;