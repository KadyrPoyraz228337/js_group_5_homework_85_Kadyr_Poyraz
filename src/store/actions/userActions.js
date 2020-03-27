import {push} from 'connected-react-router';
import axiosMusic from "../../axiosConfig";

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';

export const  fetchUserSuccess = user => ({type: FETCH_USER_SUCCESS, user});
export const  fetchUserError = error => ({type: FETCH_USER_ERROR, error});
export const logoutUserSuccess = () => ({type: LOGOUT_USER_SUCCESS});

export const fetchUser = user => async dispatch => {
  try {
    const resp = await axiosMusic.post('/users', user);
    dispatch(fetchUserSuccess(resp.data));
    dispatch(push('/'))
  } catch (error) {
    dispatch(fetchUserError(error))
  }
};

export const logOutUser = () => async dispatch => {
  try {
    await axiosMusic.delete('/users/sessions');
    dispatch(push('/'));
    dispatch(logoutUserSuccess())
  } catch (e) {
    console.log(e);
  }
};

export const fetchLoginUser = user => async dispatch => {
  try {
    const resp = await axiosMusic.post('/users/sessions', user);
    dispatch(fetchUserSuccess(resp.data));
    dispatch(push('/'))
  } catch (error) {
    dispatch(fetchUserError(error))
  }
};