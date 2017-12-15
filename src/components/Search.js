import React from 'react';
import { FormSearchContainer, ListSearchContainer } from '../containers';

const Search = () => {  
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <FormSearchContainer />
        </div>
      </div>
      <div className="row h-100">
        <div className="col-md-6">
          <ListSearchContainer />
        </div>
      </div>
    </div>
  )
}

export default Search