import React from 'react';
import Header from './Header';
import SearchPage from './SearchPage';
import Sidebar from './Sidebar';

function Search() {
  return (
    <div>
          <Header/>
     <div className="app__page">
       <Sidebar />
       <SearchPage/>
     </div>
      </div>
  )
}

export default Search