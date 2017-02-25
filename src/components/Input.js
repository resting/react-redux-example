import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class Input extends React.Component {

  handleClick() {
    const { countChar } = this.props;
    countChar(this.refs.textarea.value);
  }

  render() {

    return (
      <div>
        <textarea ref="textarea"></textarea><br />
        <button onClick={this.handleClick.bind(this)}>Count</button>
      </div>
    );
  }
}

export default connect(null, actions)(Input);
