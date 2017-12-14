import React from 'react';
import { FormContainer, ListContainer } from '../containers';

const Home = ({ meuExapanded }) => {
  let formStyle = {
    width: '50%'
  }
  let listStyle = {
    width: '50%',
    marginTop: '23px'
  }
  
  return (
    <div className={`content ${(meuExapanded ? 'expanded' : '')}`}>
      <div style={formStyle}>
        <FormContainer />
      </div>
      <div className="p-20" style={listStyle}>
        <ListContainer />
      </div>
    </div>
  )
}

export default Home