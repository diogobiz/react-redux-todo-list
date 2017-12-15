import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, searchClear } from '../actions'
import FormSearch from '../components/FormSearch';

class FormSearchContainer extends Component {
  onSubmit({ search }) {
    this.props.fetchUsers(search);
  }
  onClear() {
    this.props.searchClear();
  }
  render() {
    return (
      <FormSearch onClear={this.onClear.bind(this)} onSubmit={this.onSubmit.bind(this)}/>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: (text) => dispatch(fetchUsers(text)),
  searchClear: () => dispatch(searchClear())
})

export default connect(null, mapDispatchToProps)(FormSearchContainer)