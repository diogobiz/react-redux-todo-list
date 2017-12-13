import React, { Component } from 'react';
import { Provider } from 'react-redux';
import LayoutContainer from './containers/LayoutContainer';
import configStore from './reducers'

const store = configStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LayoutContainer />
      </Provider>
    );
  }
}

export default App;
