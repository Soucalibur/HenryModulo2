import React,{useState} from 'react';
import style from "./SearchBar.module.css"

export default function SearchBar({onSearch}) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch("Cairns");
    }}>
      <input
        id={`${style.entrada}`}
        type="text"
        placeholder="Ciudad..."
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}


// export default function SearchBar(props) {
//   // acá va tu código
//   return (
  
//   <div class = {`${style.busqueda}`}>
    
//     <button class={`${style.boton}`} onClick= {props.onSearch} > Agregar </button>
//     <input id={`${style.entrada}`} type="text" placeholder="Ciudad..."/>
    

//   </div>
//   )
// };