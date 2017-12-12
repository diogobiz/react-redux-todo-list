import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import '../style.css';
import { required, minLength5, alphaNumeric } from '../constants/validators.js';

const inputField = ({
  input,
  placeholder,
  type,
  className,
  meta: { touched, error, warning }
}) => {
  return (
    <div>
      <input {...input} placeholder={placeholder} type={type} className={className}/><br />
      {touched &&
        ((error && <span className="input-error"><b>{error}</b></span>) ||
          (warning && <span className="input-warning"><b>{warning}</b></span>))}
    </div>
  )
}

const textareaField = ({
  input,
  placeholder,
  className,
  rows,
  meta: { touched, error, warning }
}) => {
  return (
    <div>
      <textarea {...input} placeholder={placeholder} rows={rows} className={className}></textarea><br />
      {touched &&
        ((error && <span className="input-error"><b>{error}</b></span>) ||
          (warning && <span className="input-warning"><b>{warning}</b></span>))}
    </div>
  )
}

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
              component={inputField}
              type="text"
              validate={[required, minLength5]}
              warn={alphaNumeric}
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
              component={textareaField}
              rows="4"
              validate={[required, minLength5]}
              warn={alphaNumeric}              
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