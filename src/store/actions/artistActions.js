import axios from 'axios';

export const FETCH_ARTIST_SUCCESS = 'FETCH_ARTIST_SUCCESS';

export const fetchArtistSuccess = albums => ({type: FETCH_ARTIST_SUCCESS, albums});

export const fetchArtist = id => async dispatch => {
  const resp = await axios(`http://localhost:8000/albums?artist=${id}`);
  dispatch(fetchArtistSuccess(resp.data));
};