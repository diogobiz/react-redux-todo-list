import React, { Component } from 'react';
import { Provider } from 'react-redux';
import LayoutContainer from './containers/LayoutContainer';
import configStore from './reducers';
import { ApolloProvider } from 'react-apollo';
import configApolloClient from './graphql/client';

const store = configStore();

const apolloClient = configApolloClient();

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <LayoutContainer />
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;
