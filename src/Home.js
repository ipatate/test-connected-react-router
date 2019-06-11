import React from 'react';
import { connect } from 'react-redux';

const Home = ({ count }) => {
  return <div>Home Page {count}</div>;
};

export default connect(state => ({ count: state.counter.count }))(Home);
