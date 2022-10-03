import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

function App() {
  const onSearch = (ciudad) => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
      )
      .then((response) => {
        setCities((oldCities) => [...oldCities, response.data]);
      });
  };

  const onClose = (id) => {
    setCities((oldCities) => oldCities.filter((city) => city.id !== id));
  };

  const [cities, setCities] = useState([]);

  return (
    <div className="App">
      <div>
        <Nav onSearch={onSearch}></Nav>
      </div>

      <hr />
      <div>
        <Cards cities={cities} onClose={onClose} />
      </div>
      <hr />
    </div>
  );
}

export default App;

// const persona1 = new Persona("Jorge", "Vega");
