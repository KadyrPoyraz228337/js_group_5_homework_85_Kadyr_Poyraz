import axiosMusic from "../../axiosConfig";

export const FETCH_ALBUM_SUCCESS = 'FETCH_ALBUM_SUCCESS';

export const fetchAlbumSuccess = tracks => ({type: FETCH_ALBUM_SUCCESS, tracks});

export const fetchAlbum = id => async dispatch => {
  const resp = await axiosMusic.get('/tracks?album='+id);
  dispatch(fetchAlbumSuccess(resp.data));
};