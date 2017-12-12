import React, { Component } from 'react';
import '../style.css';


class List extends Component {
  
  render() {
    let classStyle = 'p-20 note-list';
    this.props.editing ? classStyle += ' editing' : classStyle += '';
    return (
      <ul className={classStyle} style={{border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '5px', height: '100%', overflow: 'auto'}}>
        {this.props.children}
      </ul>
    )
  }
}

export default List