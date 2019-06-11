import React from 'react';
import { connect } from 'react-redux';

const About = props => {
  return <div>About Page {props.count}</div>;
};

export default connect(state => ({ count: state.counter.count }))(About);
