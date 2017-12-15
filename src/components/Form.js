import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import '../style.css';
import { required, minLength5, alphaNumeric } from '../constants/validators.js';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import muiThemeable from 'material-ui/styles/muiThemeable';
import moment from 'moment';

const materialDatePicker = ({
  input,
  placeholder,
  className,
  meta: { touched, error, warning }
}) => {
  let value = input.value;
  if (value !== "") {
    
    input.value = value.length === 10 ? moment(value, "DD/MM/YYYY").toDate() : moment(value).toDate();
  } else {
    input.value = {};
  }
  return (
    <DatePicker
      {...input}
      errorText={touched && (error && error)}
      hintText={placeholder}
      container="inline"
      className={className}
      formatDate={(e) => e.toLocaleDateString()}
      okLabel="Hora do show poha"
      cancelLabel="Que não vai dar o que"
      onChange={(event, value) => input.onChange(value)}
    />
  )
}

const materialInput = ({
  input,
  autocomplete,
  placeholder,
  type,
  className,
  multiLine = false,
  rows = 1,
  muiTheme,
  meta: { touched, error, warning }
}) => {
  return (
    <TextField
      {...input}
      errorText={touched && (error && error)}
      floatingLabelText={placeholder}
      floatingLabelFocusStyle={{color: muiTheme.appBar.color}}
      underlineFocusStyle={{borderColor: muiTheme.appBar.color}}
      multiLine={multiLine}
      rows={rows}
      rowsMax={rows}
      className={className}
      fullWidth={true}   
    />
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
        <div className="row">
          <div className="col-md-8">
            <Field
              name="title"
              component={materialInput}
              validate={[required, minLength5]}
              warn={alphaNumeric}
              placeholder="Title"
              muiTheme={this.props.muiTheme}
            />
          </div>
          <div className="col-md-4">
            <Field
              name="date"
              id="date"
              component={materialDatePicker}
              validate={[required]}
              placeholder="Date"
              className="m-date-picker"    
            />
          </div>          
        </div>  

        <div className="form-group">
          <div>
            <Field
              name="description"
              component={materialInput}
              validate={[required, minLength5]}
              placeholder="Description"
              multiLine={true}
              rows={4}
              muiTheme={this.props.muiTheme}
            />                 
          </div>
        </div>
        <div>
          <RaisedButton type="submit" backgroundColor={this.props.muiTheme.appBar.color} labelColor="#FFF" className="m-r-20" label="Save" disabled={this.props.pristine || this.props.submitting || this.props.invalid} />
          <RaisedButton onClick={this.props.reset} label="Clear" disabled={this.props.pristine || this.props.submitting} />
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

const ReduxForm = reduxForm({form: 'formNote', enableReinitialize: true, keepDirtyOnReinitialize: true})(Form);
const Theme = muiThemeable()(ReduxForm)

export default connect(mapStateToProps)(Theme)