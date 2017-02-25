import React, { Component } from 'react';
import Input from './components/Input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Simple React Redux example</h1>
        <div class="container">
          <div class="top">
            <Input />
          </div>
          <div className="flex">
            <div className="fcol">
              <h3>Store's state:</h3>
              <span className="state-value"></span>
            </div>
            <div className="fcol">
              <h3>Character count:</h3>
              <span className="char-count"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
