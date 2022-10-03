import React from 'react';
import Card from "./Card.jsx";
// import style from "./Cards.module.css"

export default function Cards(props) {
  
  return (
  
  <div>

     {props.cities.map((e) =>  
        <Card 
        max={e.max}
        min={e.min}
        name={e.name}
        img={e.img}
        key={e.id}
        onClose = {()=>props.onClose(e.id)}
        />)}

  </div>)
};

