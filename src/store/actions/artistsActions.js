import axiosMusic from "../../axiosConfig";

export const FETCH_ARTISTS_SUCCESS = 'FETCH_ARTISTS_SUCCESS';

export const fetchArtistsSuccess = artists => ({type: FETCH_ARTISTS_SUCCESS, artists});

export const fetchArtists = () => async (dispatch) => {
  const resp = await axiosMusic.get('/artists');
  dispatch(fetchArtistsSuccess(resp.data))
};