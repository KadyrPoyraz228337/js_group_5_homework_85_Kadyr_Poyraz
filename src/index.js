import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createBrowserHistory} from "history";
import {ConnectedRouter, connectRouter, routerMiddleware} from "connected-react-router";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import artistsReducer from "./store/reducers/artistsReducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import 'bootstrap/dist/css/bootstrap.min.css';
import artistReducer from "./store/reducers/artistReducer";
import albumReducer from "./store/reducers/albumReducer";
import userReducer from "./store/reducers/userReducer";
import trackHistoryReducer from "./store/reducers/trackHistoryReducer";
import {loadFromLocalStorage, localStorageMiddleware} from "./store/localStorage";


const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  artists: artistsReducer,
  artist: artistReducer,
  album: albumReducer,
  users: userReducer,
  trackHistory: trackHistoryReducer
});

const middleware = [
  thunk,
  localStorageMiddleware,
  routerMiddleware(history)
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadFromLocalStorage();

export const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(
    applyMiddleware(
      ...middleware
    )
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
