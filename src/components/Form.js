import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import '../style.css';

class Form extends Component {
  onSubmit(e) {
    this.props.handleSubmit(e, null, this.props.initialValues);
    this.props.reset()
  }
  render() {
    return (
      <form className="p-20" onSubmit={(e) => this.onSubmit(e)}>
        <div className="form-group">
          <label>Title</label>
          <div>
            <Field
              className="form-control"
              name="title"
              autoComplete="off"
              component="input"
              type="text"
              required
              placeholder="Title.."
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <div>
            <Field
              className="form-control no-resize"
              name="description"
              component="textarea"
              rows="4"
              required
              placeholder="Description..."
            />
          </div>
        </div>
        <div>
          <button type="submit" className="btn btn-primary m-r-20" disabled={this.props.pristine || this.props.submitting}>
            Submit
          </button>
          <button type="button" className="btn btn-default" disabled={this.props.pristine || this.props.submitting} onClick={this.props.reset}>
            Clear
          </button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    initialValues: state.notes.item
  }
}

export default connect(mapStateToProps)(reduxForm({
  form: 'formNote',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(Form))