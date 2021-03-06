import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';

const DrawerHeader = (props) => {
  const { muiTheme } = props

  const styles = {
    paper: {
      backgroundColor: muiTheme.appBar.color,
      color: muiTheme.appBar.textColor,
      margin: 0,
      padding: 0
    },
    item: {
      backgroundColor: 'transparent',
      marginTop: '10px',
      marginBottom: '10px',
      color: muiTheme.appBar.textColor
    }
  }

  return (
    <Paper zDepth={1} style={styles.paper}>
      <List>
        <ListItem
          leftAvatar={
            <Avatar size={50} icon={<PermIdentity />} />
          }        
          primaryText="Diogo Biz"
          secondaryText={
            <p style={{color: muiTheme.appBar.textColor}}>
              diogo@codengage.com
            </p>
          }
          disabled
          style={styles.item}
        />
      </List>
    </Paper>
  )
}

export default muiThemeable()(DrawerHeader)