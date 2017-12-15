import React from 'react';
import { FormContainer, ListContainer } from '../containers';

const Home = () => {  
  return (
    <div className="row h-100">
      <div className="col-md-6">
        <FormContainer />
      </div>
      <div className="col-md-6 h-100">
        <ListContainer />
      </div>
    </div>
  )
}

export default Home