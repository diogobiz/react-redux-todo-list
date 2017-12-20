import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import { SnackBarContainer, PlayerContainer } from './';
import Scrollbar from '../components/Scrollbar';
import { Home, Search } from '../components';
import DrawerHeader from '../components/DrawerHeader';
import { indigo500 } from 'material-ui/styles/colors';
import Drawer from 'material-ui/Drawer';
import { ContentInbox, ActionGrade, ContentSend, ContentDrafts } from 'material-ui/svg-icons';
import MenuItem from 'material-ui/MenuItem';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
    return (
      <MuiThemeProvider muiTheme={muiTheme}>    
        <Router>
          <div style={{height: '100%'}}>
            <AppBar className={`app-bar ${(this.state.open ? 'expanded' : '')}`} title={<Link to="/" style={{color: 'inherit'}}>My App</Link>} onLeftIconButtonClick={this.handleToggle} />

            <Drawer
              docked={true}
              width={260}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}>
              <Scrollbar>
                <DrawerHeader />
                <div>
                  <Link to="/"><MenuItem  primaryText="Home" leftIcon={<ContentInbox />} /></Link>
                  <Link to="/search-users-github"><MenuItem  primaryText="Searh Users GitHub" leftIcon={<ActionGrade />} /></Link>
                  <Link to="/search-player-tibia"><MenuItem  primaryText="Tibia" leftIcon={<ContentSend />} /></Link>
                  <Link to="/drafts"><MenuItem  primaryText="Drafts" leftIcon={<ContentDrafts />} /></Link>
                  <Link to="/inbox"><MenuItem  primaryText="Inbox" leftIcon={<ContentInbox />} /></Link>
                </div>
              </Scrollbar>
            </Drawer>

            <div className={`main p-20 ${(this.state.open ? 'expanded' : '')}`}>
              <Route exact path="/" component={Home} />       
              <Route exact path="/search-users-github" component={Search} />
              <Route exact path="/search-player-tibia" component={PlayerContainer} />
              <Route exact path="/drafts" render={() => <h3 className={'content'}>Nem aqui!</h3>} />
              <Route exact path="/inbox" render={() => <h3 className={'content'}>Aqui também não</h3>} />
            </div>

            <SnackBarContainer />
          </div>
        </Router>
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