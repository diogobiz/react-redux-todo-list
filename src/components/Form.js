import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import '../style.css';

class Form extends Component {
  onSubmit(e) {
    this.props.handleSubmit(e);
    this.props.reset()
  }
  render() {
    return (
      <form className="p-20" onSubmit={this.onSubmit.bind(this)}>
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

export default reduxForm({form: 'formNote'})(Form)