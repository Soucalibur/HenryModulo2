import React from 'react';
import style from "./Card.module.css"


export default function Card(props) {
  
  // acá va tu código
  return (
  
  <div id = {`${style.contenedor}`}>

    <div className = {`${style.prueba}`}>
      <button id = {`${style.boton}`}  onClick = {props.onClose} >X</button>

      <p id = {`${style.titulo}`}>{props.name}</p>

      
      <div id ={`${style.palabras}`}>
      
        <p id = {`${style.min}`}>Min <br />{props.min}</p>

        <p id={`${style.max}`}>Max <br />{props.max}</p>

      </div>
      

      <img id={`${style.imagen}`} src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="imagen1" />
      

    </div>
     

  </div>
  )
};

