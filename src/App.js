import React, { Component } from 'react';
import { Provider } from 'react-redux';
import FormContainer from './containers/FormContainer';
import ListContainer from './containers/ListContainer';
import configStore from './reducers'
import './style.css';

const store = configStore();

class App extends Component {
  render() {
    let formStyle = {
      width: '50%'
    }
    let listStyle = {
      width: '50%',
      marginTop: '23px'
    }
    // console.log(this)
    return (
      <Provider store={store}>
        <div className="display-flex" style={{height: '100%'}}>
          <div style={formStyle}>
            <FormContainer />
          </div>
          <div className="p-20" style={listStyle}>
            <ListContainer />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
