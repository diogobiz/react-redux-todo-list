import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListSearch } from '../components';
import Subheader from 'material-ui/Subheader';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

class ListSearchContainer extends Component {
  render() {
    return (
      <ListSearch>
          {(!!this.props.results.length &&
            this.props.results.map((item, index) => {
              return (
                <ListItem
                  value={index}
                  key={+item.id}
                  leftAvatar={<Avatar src={item.avatar_url} />}
                >
                  <a target="_blank" href={item.html_url}><b>{item.login}</b></a>
                </ListItem>
              )
            }))
          ||
          (this.props.searching &&
            <Subheader>Searching...</Subheader>)            
          ||
          (this.props.noResults &&
            <Subheader>No results found</Subheader>)
          ||
          (!this.props.noResults && !this.props.results.length &&
            <Subheader>Search for User of GitHub</Subheader>)            
          }
      </ListSearch>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.search.results,
    error: state.search.error,
    noResults: state.search.noResults,
    searching: state.search.searching
  }
}


export default connect(mapStateToProps)(ListSearchContainer)