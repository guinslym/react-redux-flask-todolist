import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
)(createStore);

const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          Hello World!
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
