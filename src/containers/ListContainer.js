import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeNote, editNote } from '../actions';
import { List, Item, Hr } from '../components';
import { indigo500 } from 'material-ui/styles/colors';

class ListContainer extends Component {
  onRemove(item) {
    this.props.removeNote(item);
  }
  onEdit(item) {
    this.props.editNote(item);
  }
  render() {
    return (
      <List editing={this.props.editing}>
        {!!this.props.items.length ? 
          this.props.items.map((item, index) => {
            return (
            <div key={index}>
              <Item onRemove={this.onRemove.bind(this)} onEdit={this.onEdit.bind(this)} item={item} />
              {!!this.props.items[index + 1] && <Hr bgColor={indigo500} />}
            </div>
            )
          })
          :
          <li className="text-center" style={{color: 'rgba(0, 0, 0, 0.3)'}}><h2>Insert new note...</h2></li>
        }
      </List>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.notes.items,
    editing: state.notes.editing
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeNote: (payload) => dispatch(removeNote(payload)),
  editNote: (payload) => dispatch(editNote(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)