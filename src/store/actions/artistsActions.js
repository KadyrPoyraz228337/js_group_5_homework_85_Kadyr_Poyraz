import axiosMusic from "../../axiosConfig";
import {push} from 'connected-react-router'

export const FETCH_ARTISTS_SUCCESS = 'FETCH_ARTISTS_SUCCESS';

export const fetchArtistsSuccess = artists => ({type: FETCH_ARTISTS_SUCCESS, artists});

export const fetchArtists = () => async (dispatch) => {
  const resp = await axiosMusic.get('/artists');
  dispatch(fetchArtistsSuccess(resp.data))
};

export const addArtist = artist => async dispatch => {
  try {
    await axiosMusic.post('/artists', artist);
    dispatch(push('/'))
  } catch (e) {
    console.log(e);
  }
};

export const artistPublish = id => async dispatch => {
  try {
    await axiosMusic.put('/artists/' + id);
    dispatch(push('/'))
  } catch (e) {
    console.log(e);
  }
};

export const deleteArtist = id => async dispatch => {
  try {
    await axiosMusic.delete('/artists/' + id);
    dispatch(push('/'))
  } catch (e) {
    console.log(e);
  }
};