import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import player from '../graphql/queries/player';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

import CircularProgress from 'material-ui/CircularProgress';
import { Player, FormSearch } from '../components';

const initState = {
  player: null,
  searchText: '',
  loading: false,
  error: ''
};

const style = {
  textAlign: 'left',
  display: 'inline-block',
  whiteSpace: 'nowrap',
  padding: '20px',
  minWidth: '335px',
  minHeight: '210px'
};

const ExamplesPlayer = () => (
  <Paper style={style} zDepth={1}>
    <Subheader>Examples of nick names to search</Subheader>
    Name: Hue Apocalipse <br />
    Name: Kronek <br />
    Name: Dremz <br />
    Name: Hank Moodyy <br />
    Name: Huguera <br />
    Name: Ricanelaxz <br />
  </Paper>
)

class PlayerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  onSubmit = async ({search}) => {
    await this.setState({searchText: search, loading: true});
    this._executedSearch();
  }

  onClear = () => {
    this.setState(initState);
  }
  
  _executedSearch = async () => {
    const { searchText } = this.state;
    try {
      const result = await this.props.client.query({
        query: player,
        variables: {
          nickname: searchText
        }
      });
      await this.setState({loading: false, error: false, player: result.data.player});
    } catch(error) {
      this.setState({loading: false, error: error.toString(), player: null});
    }
  };

  render() {
    return(
      <div>
        <FormSearch onClear={this.onClear} onSubmit={this.onSubmit} />
        <div className="row p-20">
          <div className="col-md-9">
            {(this.state.loading &&
              <CircularProgress mode="indeterminate" style={{ margin: '20px auto', display: 'block' }} />) ||
            (!!this.state.error && 
              <b>{this.state.error}</b>) ||
            (!!this.state.player &&
              <Player player={this.state.player} />)}
          </div>

          <div className="col-md-3">
            <ExamplesPlayer />
          </div>
        </div>
      </div>
    )
  }
}

export default withApollo(PlayerContainer)