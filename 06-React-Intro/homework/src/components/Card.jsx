import React from 'react';

export default function Card(props) {
  // acá va tu código
  return (
  
  <div>
     
    <button onClick = {props.onClose} >X</button>

    <h4>{props.name}</h4>

    <p>Min</p>
    <p>{props.min}</p>

    <p>Max</p>
    <p>{props.max}</p>

    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="imagen1" />
    

  </div>
  )
};

