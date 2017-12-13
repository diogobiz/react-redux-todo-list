import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import FormContainer from '../containers/FormContainer';
import ListContainer from '../containers/ListContainer';
import SnackBarContainer from '../containers/SnackBarContainer';
import Scrollbar from '../components/Scrollbar';
import DrawerHeader from '../components/DrawerHeader';
import { indigo500 } from 'material-ui/styles/colors';
import Drawer from 'material-ui/Drawer';
import { ContentInbox, ActionGrade, ContentSend, ContentDrafts } from 'material-ui/svg-icons';
import MenuItem from 'material-ui/MenuItem';

const muiTheme = getMuiTheme({
  appBar: {
    height: 50,
    color: indigo500    
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
        <div style={{height: '100%'}}>        
          <AppBar className={`app-bar ${(this.state.open ? 'expanded' : '')}`} title="My App" onLeftIconButtonClick={this.handleToggle} />
          <Drawer
            docked={true}
            width={260}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}>
            <Scrollbar>
              <DrawerHeader />

              <MenuItem  primaryText="Home" leftIcon={<ContentInbox />} />
              <MenuItem  primaryText="Starred" leftIcon={<ActionGrade />} />
              <MenuItem  primaryText="Sent mail" leftIcon={<ContentSend />} />
              <MenuItem  primaryText="Drafts" leftIcon={<ContentDrafts />} />
              <MenuItem  primaryText="Inbox" leftIcon={<ContentInbox />} />
            </Scrollbar>
          </Drawer>          

          <div className={`content ${(this.state.open ? 'expanded' : '')}`}>
            <div style={formStyle}>
              <FormContainer />
            </div>
            <div className="p-20" style={listStyle}>
              <ListContainer />
            </div>
          </div>

          <SnackBarContainer />
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    snackbar: state.notes.snackbar
  }
}

export default connect(mapStateToProps)(LayoutContainer)