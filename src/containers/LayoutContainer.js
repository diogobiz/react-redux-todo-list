import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import FormContainer from './FormContainer';
import ListContainer from './ListContainer';
import * as colors from '../constants/colors.js';
import Drawer from 'material-ui/Drawer';

const muiTheme = getMuiTheme({
  appBar: {
    height: 50,
    color: colors.indigo500    
  },
});

class LayoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    let formStyle = {
      width: '50%'
    }
    let listStyle = {
      width: '50%',
      marginTop: '23px'
    }    
    return (
      <MuiThemeProvider muiTheme={muiTheme}>    
        <div>        
          <AppBar title="My App" onLeftIconButtonClick={this.handleToggle} />
          <Drawer
            docked={false}
            width={260}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}>
          </Drawer>          

          <div className="display-flex" style={{height: '100%'}}>
            <div style={formStyle}>
              <FormContainer />
            </div>
            <div className="p-20" style={listStyle}>
              <ListContainer />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default LayoutContainer;