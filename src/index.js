import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createStore } from 'redux';
import reducer from './redux/reducers';

let myStore= createStore(reducer);


ReactDOM.render(
  <Provider store = {myStore}>
  <App />

  </Provider>
  
    
 ,
  document.getElementById('root')
);

