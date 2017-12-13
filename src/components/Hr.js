import React from 'react';

const Hr = ({ bgColor }) => {
  const style = {
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    margin: '20px 0 8px 0px',
    backgroundColor: bgColor    
  }
  return (
    <div style={style}></div>
  )
}

export default Hr