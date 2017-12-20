import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import users from '../graphql/queries/users';

import Subheader from 'material-ui/Subheader';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import CircularProgress from 'material-ui/CircularProgress';
import { ListSearch, FormSearch, ListRespositories } from '../components';

const initState = {
  users: [],
  searchText: '',
  loading: false,
  error: '',
  noResults: false,
  selected: {}
};

class ListSearchContainerGraphql extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  onSubmit = async ({search}) => {
    this.setState({...initState, searchText: search, loading: true}, () => this._executedSearch());
  }

  onClear = () => {
    this.setState(initState);
  }
  
  _executedSearch = async () => {
    const { searchText } = this.state;
    try {
      this.props.client.query({
        query: users,
        variables: {
          username: searchText
        }
      })
      .then((response) => {
        this.setState({
          loading: false,
          error: false,
          users: response.data.users,
          noResults: !response.data.users.length ? true : false,
          selected: response.data.users[0]
        });
      });
    } catch(error) {
      this.setState({
        ...initState,
        loading: false,
        error: error.toString(),
        player: [],
        noResults: false
      });
    }
  };

  onTouchTap = (index) => {
    this.setState({selected: this.state.users[index]});
  }

  render() {
    return(
      <div>
        <FormSearch onClear={this.onClear} onSubmit={this.onSubmit} />
        <div className="row">
          <div className="col-md-8">
            <ListSearch onTouchTap={this.onTouchTap}>
              {(!!this.state.users.length &&
                this.state.users.map((user, index) => {
                  return (
                    <ListItem
                      value={index}
                      key={+index}
                      leftAvatar={<Avatar src={user.img} />}
                    >
                      <a target="_blank" href={user.url}><b>{user.username}</b></a>
                    </ListItem>
                  )
                }))
                ||
                (this.state.loading &&
                  <CircularProgress mode="indeterminate" style={{ margin: '20px auto', display: 'block' }} />)            
                ||
                (this.state.noResults &&
                  <Subheader>No results found</Subheader>)
                ||
                (!this.state.noResults && !this.state.users.length &&
                  <Subheader>Search for User of GitHub</Subheader>)            
                }
            </ListSearch>
          </div>
          
          <div className="col-md-4">
            <ListRespositories user={this.state.selected} />
          </div>
        </div>
      </div>
    )
  }
}

export default withApollo(ListSearchContainerGraphql)