import React, { Component } from 'react';
import Item from './Item';
import Hr from './Hr';
import '../style.css';


class List extends Component {
  
  render() {
    return (
      <ul className="p-20 note-list" style={{border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '5px', height: '100%'}}>
        {!!this.props.list.length ? 
          this.props.list.map((item, index) => {
            return (
              <li key={index}>
                <Item onRemove={this.props.onRemove} item={item} />
                {this.props.list.length > 1 && <Hr />}
              </li>
            )
          })
          :
          <li className="text-center"><h2>Insert New Note...</h2></li>
        }
      </ul>
    )
  }
}

export default List