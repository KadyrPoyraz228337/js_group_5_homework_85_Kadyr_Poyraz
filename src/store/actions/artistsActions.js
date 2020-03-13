import axios from 'axios';

export const FETCH_ARTISTS_SUCCESS = 'FETCH_ARTISTS_SUCCESS';

export const fetchArtistsSuccess = artists => ({type: FETCH_ARTISTS_SUCCESS, artists});

export const fetchArtists = () => async dispatch => {
  const resp = await axios.get('http://localhost:8000/artists');
  dispatch(fetchArtistsSuccess(resp.data))
};