import React from 'react';
import { connect } from 'react-redux';

const ShowState = ({text}) => (
  <div className="fcol">
    <h3>Store's state:</h3>
    <span className="state-value">{text}</span>
  </div>
);

const mapStateToProps = (state) => {
  return {
    text: state.countChar.text
  };
};

export default connect(mapStateToProps)(ShowState);
