import React from 'react';
import SearchBar from './SearchBar.jsx';
// import './Nav.module.css';

function Nav({onSearch}) {
  return (
    <div>
      <SearchBar onSearch={onSearch}></SearchBar>
    </div>
  );
};

export default Nav;
