import axiosMusic from "../../axiosConfig";
import {push} from 'connected-react-router'

export const FETCH_TRACK_HISTORY_SUCCESS = 'FETCH_TRACK_HISTORY_SUCCESS';

export const fetchTracksSuccess = tracks => ({type: FETCH_TRACK_HISTORY_SUCCESS, tracks});

export const listenToTheTrack = id => async (dispatch, getState) => {
  if(!!getState().users.user) {
    await axiosMusic.post('/track_history', {track: id})
  }
};

export const fetchTracks = () => async (dispatch, getState) => {
  try {
    if(!getState().users.user) {
      return dispatch(push('login'))
    }
    const resp = await axiosMusic.get('/track_history');
    dispatch(fetchTracksSuccess(resp.data));
  } catch (e) {
    console.log(e);
  }
};