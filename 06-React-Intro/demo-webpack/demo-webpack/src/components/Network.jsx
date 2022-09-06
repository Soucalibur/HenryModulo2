import React from "react";
import Line from "./Line.jsx";

const lines = [
    {lineName:"A",
    destination:"Estación H"},
    {lineName:"B",
    destination:"Estación A"},
    {lineName:"C",
    destination:"Estación D"},
    {lineName:"D",
    destination:"Estación R"},
    {lineName:"E",
    destination:"Estación Tukis"},
]

function Network (props){
    return(
        <>
            {
                lines.map(line=><Line lineName={line.lineName} destination={line.destination} />)
            }           
        </>
    )
}

export default Network;