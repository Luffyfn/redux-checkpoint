import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import reducer from './Reducer';

const logger = store => next => action => {
    let result = next(action)
    return result
   }
  
  const store = createStore(reducer, applyMiddleware(logger));

  export default store;