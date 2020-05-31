import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import reducer from './Reducer';

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
   }
  
  const store = createStore(reducer, applyMiddleware(logger));

  export default store;