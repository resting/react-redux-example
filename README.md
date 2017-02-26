# Simple react redux example
![demo](https://github.com/resting/react-redux-example/raw/master/public/demo.gif)

Demo: https://resting.github.io/react-redux-example

`npm install` then  
`npm start` should open browser to `localhost:3000`.  
Paste some text into the textarea, then press the <kbd>Count</kbd> button.  
Lower left displays the state captured.  
Lower right shows the number character count.

Step 1: Create react App
---
see https://github.com/facebookincubator/create-react-app

Step 2: Create react components
---
These are just plain react components for rendering on the screen.

Step 3: Install redux, react-redux
---
`npm i -S react react-redux`

Step 4: Create a Action Creator
---
see http://redux.js.org/docs/basics/Actions.html

From Step 4 onwards, this is where redux comes in and gets confusing.  
I take references from http://redux.js.org/docs/basics/UsageWithReact.html

```javascript
export const countChar = (text) => {
  return {
    type: 'count_char',
    text // equiv of text: text
  };
};
```
`type` is mandatory.  
This Action takes one argument,  
where `text` is value of `<textarea>`.


Step 5: Create a Reducer
---
see http://redux.js.org/docs/basics/Reducers.html

This is one reducer:

```javascript
const countChar = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case 'count_char':
      return {
        text: action.text,
        char_count: action.text.length
      }
    default:
      return state;
  }
}

export default countChar;
```


You will need another one that combines all reducers:

```javascript
import { combineReducers} from 'redux';
import countChar from './countchar';

const appReducers = combineReducers({
  countChar
});

export default appReducers;

```

This will create a `countChar` propery in state where you can get  
`text` and `char_count`.

Step 6: Pass Action Creator to Input component as props
---
Refactor `components/Input.js` like so:

```javascript
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
```
You use `connect()` from `react-redux` to pass the Action Creator  
as props. Note the first arugment is `null`.

You deconstruct the `countChar` (Action Creator) from `this.props`,   
then call it, passing in the `<textarea>`'s value.  
This will dispatches the Action type `count_char` to all reducers.

Step 7: Extract Store's state and Character count's `<div>` as a Container.
---

```javascript
import React from 'react';
import { connect } from 'react-redux';

const ShowCount = ({char_count}) => (
  <div className="fcol">
    <h3>Character count:</h3>
    <span className="char-count">{char_count}</span>
  </div>
);

const mapStateToProps = (state) => {
  return {
    char_count: state.countChar.char_count
  };
};

export default connect(mapStateToProps)(ShowCount);
```

You use `connect()` to pass `state` as `props` to the  
component (ShowCount).

Step 8: Create Provider, Store and render the 2 extracted components
---
```javascript
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

```

End.
