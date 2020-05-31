import React from 'react';

const initialState = {
    count: 0
  };
  
  const reducer = (state = initialState, action) => {
    switch(action.type) {
      case "INCREMENT":
        return {
          count: state.count + 1
        };
      case "DECREMENT":
        return {
          count: (state.count > 0) ? state.count - 1 : 0
        };
      case "RESET":
        return {
          count: 0
        };
      default:
        return state;
      }
   };

   export default reducer;