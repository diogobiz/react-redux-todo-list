import React from 'react';
import '../style.css';
import '../assets/fonts/icons/open-iconic-master/font/css/open-iconic-bootstrap.css';

const Item = ({ item, onRemove, onEdit }) => (
  <li>
    <div className="display-flex m-b-20" style={{'alignItems': 'center'}}>
      <b style={{width: '-webkit-fill-available'}}>{item.title}</b>
      <b className="m-r-20 nowrap">Creation: {item.date}</b>
      <button className="btn btn-default m-r-20" onClick={() => onEdit(item)}>Edit</button>
      <div className="remove-note" onClick={() => onRemove(item)}><span className="oi oi-circle-x" style={{verticalAlign: 'middle'}}></span></div>
    </div>
    <pre style={{whiteSpace: 'normal', height: '89px'}}>{item.description}</pre>
  </li>
)

export default Item