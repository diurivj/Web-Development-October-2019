import React from "react";

function Counter(props) {
  return (
    <>
      <h3>Count:</h3>
      <p>{props.count}</p>
      <button onClick={props.handleIncrement}>+</button>
      <button onClick={props.handleDecrement}>-</button>
    </>
  );
}

export default Counter;
