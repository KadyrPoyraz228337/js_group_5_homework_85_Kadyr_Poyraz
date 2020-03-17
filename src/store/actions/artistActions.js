import axiosMusic from "../../axiosConfig";

export const FETCH_ARTIST_SUCCESS = 'FETCH_ARTIST_SUCCESS';

export const fetchArtistSuccess = albums => ({type: FETCH_ARTIST_SUCCESS, albums});

export const fetchArtist = id => async dispatch => {
  const resp = await axiosMusic.get(`/albums?artist=${id}`);
  dispatch(fetchArtistSuccess(resp.data));
};