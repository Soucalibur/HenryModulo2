import React from 'react';
import Card from './Card';
import styled from "styled-components"

const Container = styled.div`
  display:flex;
  flex-direction:row;
  width:50%;
  margin:auto;
  border-radius:15px;
  border:1px solid black;
  padding:1em;
`

const Titulo = styled.h3`
  font-size:3em;
`

export default function Cards({cities,onClose}) {

  return (
    <>
      <Titulo>Climas</Titulo>
      {/* div className={style.container} */}
      <Container> 
        {cities.map(
          city=><Card 
            max={city.main.temp_max}
            min={city.main.temp_min}
            name={city.name}
            img={city.weather[0].icon}
            onClose={onClose}
            key= {city.id}   
            id = {city.id}        
          />
        )}
      </Container>
    </>
  )
};

