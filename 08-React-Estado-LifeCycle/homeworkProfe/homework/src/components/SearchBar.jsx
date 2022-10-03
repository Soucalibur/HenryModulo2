import React, { useState } from 'react';
import styled from "styled-components";
import axios from "axios"

const Container = styled.div`
  margin:1em;
`

const Input = styled.input`
  border-radius:10px 0px 0px 10px;
  border:none;
  background-color:#a2a8d3;
  width:15em;
  height:3em;
`

const Boton = styled.button`
border-radius:0px 10px 10px 0px;
border:none;
background-color:#a2a8d3;
height:3em;
transition:0.5s;
&:hover{
  background-color:#113f67;
}
`




export default function SearchBar({onSearch}) {

  const [searchInput,setSearchInput] = useState("");

  const changeHandler = (event)=> {
    setSearchInput(event.target.value);       
  }

  return(
    <Container>
      <Input type="text" name="search" id="search" placeholder="Busca tu ciudad..." 
      onChange={changeHandler} />
      <Boton onClick={()=>onSearch(searchInput)} > Buscar</Boton>
    </Container>
  )
};

