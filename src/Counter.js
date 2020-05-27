import React from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'


const Counter = props => {

    const increment = () => {
      props.dispatch({type: "INCREMENT"});
    };
   
    const decrement = () => {
      props.dispatch({type: "DECREMENT"});
    };

    const reset = () => {
        props.dispatch({type: "RESET"});
      };
   
    return (
      <div className="container">
        <h2>Counter</h2>
        <button className="btn btn-danger btn-sm" onClick={() => decrement()}>-</button>
        <button className="btn btn-success btn-sm" onClick={() => increment()}>+</button>
        <span className="count" style={{fontSize: 25, padding: 5}}>{props.count}</span>
        <button className="btn btn-warning btn-sm" onClick={() => reset()}>Reset</button>
      </div>
    );
   };

const mapStateToProps = state => {
    return {
        count: state.count
    };
};
   
export default connect(mapStateToProps)(Counter);