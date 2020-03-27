import {FETCH_USER_SUCCESS, LOGOUT_USER_SUCCESS} from "./actions/userActions";

export const saveToLocalStorage = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState)
  } catch (e) {
    console.log(e);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');

    if(serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState)
  } catch (e) {
    return undefined;
  }
};

const actions = [LOGOUT_USER_SUCCESS, FETCH_USER_SUCCESS];

export const localStorageMiddleware = store => next => action => {
  let result = next(action);

  if(actions.includes(action.type)) {
    console.log(action.type);
    saveToLocalStorage({
      users: {
        user: store.getState().users.user
      }
    })
  }
  return result
};