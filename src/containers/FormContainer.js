import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions'
import Form from '../components/Form';

class FormContainer extends Component {
  onSubmit({ title, description, id, date }, dispatch, props) {
    setTimeout(() => {
      let note = {};
      if (!props.initialValues.id) {
        note = {
          title: title,
          description: description,
          date: date.toLocaleDateString(),
          id: id
        };
      } else {
        note = {
          title: title,
          description: description,
          date: props.initialValues.date,
          id: props.initialValues.id          
        };
      }
      this.props.addNote(note);
    }, 1000);
  }
  render() {
    return (
      <Form onSubmit={this.onSubmit.bind(this)}/>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addNote: (payload) => dispatch(addNote(payload))
})

export default connect(null, mapDispatchToProps)(FormContainer)