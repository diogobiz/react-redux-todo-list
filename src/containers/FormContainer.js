import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions'
import Form from '../components/Form';

class FormContainer extends Component {
  onSubmit({ title, description }) {
    setTimeout(() =>{
      let note = {
        title: title,
        description: description,
        date: new Date().toLocaleDateString()
      };
      this.props.addNote(note);
    }, 1000);
  }
  render() {
    return (
      <Form onSubmit={this.onSubmit.bind(this)} />
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  addNote: (payload) => dispatch(addNote(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)