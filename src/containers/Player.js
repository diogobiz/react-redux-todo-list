import React, { Component } from 'react';
import { graphql, withApollo } from 'react-apollo';
import player from '../graphql/queries/player';

import CircularProgress from 'material-ui/CircularProgress';
import FormSearch from '../components/FormSearch';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {},
      searchText: '',
      loading: false
    };
  }

  onSubmit = async ({search}) => {
    await this.setState({searchText: search, loading: true});
    this._executedSearch();
  }
  
  _executedSearch = async () => {
    const { searchText } = this.state;
    const result = await this.props.client.query({
      query: player,
      variables: {
        nickname: searchText
      }
    });
    await this.setState({loading: false});
  };

  render() {
    return(
      <div>
        <FormSearch onSubmit={this.onSubmit.bind(this)} />
        {this.state.loading &&
          <CircularProgress mode="indeterminate" style={{ margin: '20px auto', display: 'block' }} />}
      </div>
    )
  }
}

export default withApollo(Player)