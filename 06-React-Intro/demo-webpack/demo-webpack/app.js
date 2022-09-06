import React from "react";
import ReactDOM from "react-dom";
import Network from "./src/components/Network.jsx";

function App(props) {
  return (
    <>
      <h1>Otra cosa</h1>
      <Network />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
