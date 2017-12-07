import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeNote } from '../actions'
import List from '../components/List';

class ListContainer extends Component {
  onRemove(item) {
    this.props.removeNote(item);
  }
  render() {
    return (
      <List onRemove={this.onRemove.bind(this)} list={this.props.list}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.notes
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeNote: (payload) => dispatch(removeNote(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)