import React from 'react';
import '../style.css';

const Item = ({ item, onRemove }) => (
  <div>
    <div className="display-flex" style={{'alignItems': 'center'}}>
      <b style={{width: '-webkit-fill-available'}}>{item.title}</b>
      <b className="m-r-20 nowrap">Creation: {item.date}</b>
      <div className="remove-note" onClick={onRemove.bind(this, item)}>×</div>
    </div>
    <pre style={{whiteSpace: 'normal'}}>{item.description}</pre>  
  </div>
)

export default Item