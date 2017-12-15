import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { ActionSearch, ContentClear } from 'material-ui/svg-icons';

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

class FormSearch extends Component {
  render() {
    return (
      <form className="p-20" onSubmit={this.props.handleSubmit}>
        <div className="row">
          <div className="col-md-3">
            <Field
              name="search"
              component={materialInput}
              placeholder="Search"
              muiTheme={this.props.muiTheme}
            />
          </div>      
          <div className="col-md-1 m-t-30">
            <RaisedButton
              type="submit" 
              backgroundColor={this.props.muiTheme.appBar.color}
              labelColor="#FFF"
              icon={<ActionSearch />}
              disabled={this.props.submitting} />
          </div>
          <div className="col-md-1 m-t-30">
            <RaisedButton
              onClick={() => { this.props.onClear(); this.props.reset(); }}
              icon={<ContentClear />}
              disabled={this.props.submitting} />
          </div>          
        </div>
      </form>
    )
  }
}

const ReduxForm = reduxForm({form: 'formSearch'})(FormSearch);

export default muiThemeable()(ReduxForm)