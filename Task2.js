import React from "react";

function Greeting(props) {
  const name = props.name || "Guest";
  return <h1>Hello, {name}!</h1>;
}

export default Greeting;
