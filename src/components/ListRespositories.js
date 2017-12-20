import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { Scrollbar } from './';
import Paper from 'material-ui/Paper';

class ListRespositories extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.user;
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(nextProps.user) !== JSON.stringify(this.props.user)) {
      this.setState({
        user: nextProps.user
      });      
    }
  }

  render() {
    const { user } = this.state;
    console.log('re render', user);
    return (
      <div>
        {(!!user && !!user.repositories &&
          <Paper className="h-100" zDepth={1}>
            <List className="h-100">
              <Subheader>Repositories of {user.username}</Subheader>
              <Scrollbar>
                {!!user.repositories && !!user.repositories.length &&
                  user.repositories.map((repository) => {
                    return (
                      <ListItem key={repository.name}>
                        <a target="_blank" href={repository.url}><b>{repository.name}</b></a>
                      </ListItem>
                    )
                  })
                }
              </Scrollbar>
            </List>
          </Paper>
        )}
      </div>
    )
  }
}

export default ListRespositories