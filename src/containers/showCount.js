import React from 'react';
import { connect } from 'react-redux';

const ShowCount = ({char_count}) => (
  <div className="fcol">
    <h3>Character count:</h3>
    <span className="char-count">{char_count}</span>
  </div>
);

const mapStateToProps = (state) => {
  console.log(state);
  return {
    char_count: state.countChar.char_count
  };
};

export default connect(mapStateToProps)(ShowCount);
