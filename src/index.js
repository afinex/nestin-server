import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import from react-redux and redux
import {legacy_createStore as createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

// create user reducer function
const authReducer = (state = {name:"fin",age:"23"}, action) =>{
  switch(action.type){
    case "LOGGED_IN_USER" :
      return {...state, ...action.payload}
    case "LOGGED_OUT" :
      return action.payload;
    default :
      return state;
  }
}

// combine multiple reducer 
const rootReducer = combineReducers({
  user : authReducer,
})

// create redux store
const store = createStore(rootReducer, composeWithDevTools());

// provide redux store to the entire app

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
