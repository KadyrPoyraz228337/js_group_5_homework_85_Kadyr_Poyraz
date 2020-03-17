import {push} from 'connected-react-router';
import axiosMusic from "../../axiosConfig";

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

export const  fetchUserSuccess = user => ({type: FETCH_USER_SUCCESS, user});
export const  fetchUserError = error => ({type: FETCH_USER_ERROR, error});

export const fetchUser = user => async dispatch => {
  try {
    const resp = await axiosMusic.post('/users', user);
    dispatch(fetchUserSuccess(resp.data));
    localStorage.setItem('user', JSON.stringify(resp.data));
    dispatch(push('/'))
  } catch (error) {
    dispatch(fetchUserError(error))
  }
};

export const fetchLoginUser = user => async dispatch => {
  try {
    const resp = await axiosMusic.post('/users/sessions', user);
    dispatch(fetchUserSuccess(resp.data));
    localStorage.setItem('user', JSON.stringify(resp.data));
    dispatch(push('/'))
  } catch (error) {
    dispatch(fetchUserError(error))
  }
};