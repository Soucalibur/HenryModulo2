import React from 'react';
import style from "./SearchBar.module.css"

export default function SearchBar(props) {
  // acá va tu código
  return (
  
  <div class = {`${style.busqueda}`}>
    
    <button class={`${style.boton}`} onClick= {props.onSearch} > Agregar </button>
    <input id={`${style.entrada}`} type="text" placeholder="Ciudad..."/>
    

  </div>
  )
};



