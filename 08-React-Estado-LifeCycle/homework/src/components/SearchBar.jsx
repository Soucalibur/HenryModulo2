import React,{useState} from 'react';
import style from "./SearchBar.module.css"

export default function SearchBar({onSearch}) {

  const [city,setCity] = useState("");

  return (

    <form onSubmit={(event) => {
      event.preventDefault();
      onSearch(city);
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={event=>{
          setCity(event.target.value)
        }}
        
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