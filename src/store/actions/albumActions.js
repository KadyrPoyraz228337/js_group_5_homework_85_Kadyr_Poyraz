import axiosMusic from "../../axiosConfig";
import {push} from 'connected-react-router'

export const FETCH_ALBUM_SUCCESS = 'FETCH_ALBUM_SUCCESS';

export const fetchAlbumSuccess = tracks => ({type: FETCH_ALBUM_SUCCESS, tracks});

export const fetchAlbum = id => async dispatch => {
  const resp = await axiosMusic.get('/tracks?album='+id);
  dispatch(fetchAlbumSuccess(resp.data));
};

export const publishTrack = id => async dispatch => {
  try {
    await axiosMusic.put('/tracks/'+id);
  } catch (e) {
    console.log(e);
  }
};

export const deleteTrack = id => async dispatch => {
  try {
    await axiosMusic.delete('/tracks/'+id);
    dispatch(push('/'))
  } catch (e) {
    console.log(e);
  }
};

export const addAlbum = album => async dispatch => {
  try {
    await axiosMusic.post('/albums', album);
    dispatch(push('/'))
  } catch (e) {
    console.log(e);
  }
};

export const publishAlbum = id => async dispatch => {
  try {
    await axiosMusic.put('/albums/'+id);
    dispatch(push('/'))
  } catch (e) {
    console.log(e);
  }
};

export const deleteAlbum = id => async dispatch => {
  try {
    await axiosMusic.delete('/albums/'+id);
    dispatch(push('/'))
  } catch (e) {
    console.log(e);
  }
};