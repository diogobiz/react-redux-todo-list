import React, { Component } from 'react';
import '../style.css';
import { List, makeSelectable } from 'material-ui/List';

let ListSearch = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue || 0,
      });
      console.log(this.props)
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

ListSearch = wrapState(ListSearch);

export default ListSearch