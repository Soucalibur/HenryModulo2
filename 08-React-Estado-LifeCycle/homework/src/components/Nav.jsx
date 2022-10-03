import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from "./SearchBar"
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div>Navegacion

      <img src={Logo} alt="logo" />
      
      <SearchBar 
        onSearch={onSearch}
      />
  
      

    </div>
    
  );
};

export default Nav;
