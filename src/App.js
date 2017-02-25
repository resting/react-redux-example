import React, { Component } from 'react';
import Input from './components/Input';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducers from './reducers';
import ShowState from './containers/showState';
import ShowCount from './containers/showCount';

class App extends Component {
  render() {
    const store = createStore(appReducers);
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Simple React Redux example</h1>
          <div className="container">
            <div className="top">
              <Input />
            </div>
            <div className="flex">
              <ShowState />

              <ShowCount />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
