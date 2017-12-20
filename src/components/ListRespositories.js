import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class ListRespositories extends Component {
  componentWillMount() {
    this.setState({
      user: this.props.user
    });
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(nextProps.user) !== JSON.stringify(this.props.user)) {
      this.setState({
        user: nextProps.user
      }, () => console.log(this.state));      
    }
  }

  render() {
    const { user } = this.state;
    console.log('re render');
    return (
      <List>
        {(!!user && !!user.repositories &&
          <div>
            <Subheader>Repositories of {user.username}</Subheader>
            {!!user.repositories && !!user.repositories.length &&
              user.repositories.map((repository) => {
              return (
                <ListItem key={repository.name}>
                  <a href={repository.url}>{repository.name}</a>
                </ListItem>
              )
            })}
          </div>
        )}
      </List>
    )
  }
}

export default ListRespositories