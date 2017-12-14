import React, { Component } from 'react';
import '../style.css';
import Scrollbar from './Scrollbar';


class List extends Component {
  
  render() {
    let classStyle = 'p-20 note-list';
    this.props.editing ? classStyle += ' editing' : classStyle += '';
    return (
      <Scrollbar horizontal={true} style={{border: '1px solid rgba(0, 0, 0, 0.1)', height: '100%'}}>
        <ul className={classStyle}>
          {this.props.children}
        </ul>
      </Scrollbar>
    )
  }
}

export default List