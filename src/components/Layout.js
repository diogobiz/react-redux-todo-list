import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import FormContainer from '../containers/FormContainer';
import ListContainer from '../containers/ListContainer';
import Scrollbar from './Scrollbar';
import DrawerHeader from './DrawerHeader';
import { indigo500 } from 'material-ui/styles/colors';
import Drawer from 'material-ui/Drawer';

const muiTheme = getMuiTheme({
  appBar: {
    height: 50,
    color: indigo500    
  },
});

class Layout extends Component {
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
        <div style={{height: '100%'}}>        
          <AppBar title="My App" onLeftIconButtonClick={this.handleToggle} />
          <Drawer
            docked={false}
            width={260}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}>
            <Scrollbar>
              <DrawerHeader />
            </Scrollbar>
          </Drawer>          

          <div className="display-flex" style={{height: 'calc(100% - 50px)', overflow: 'auto'}}>
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

export default Layout;