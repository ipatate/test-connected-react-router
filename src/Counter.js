import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ count, dispatch }) => {
  return (
    <div>
      <p>Total : {count}</p>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
    </div>
  );
};

export default connect(state => ({ count: state.counter.count }))(Counter);
