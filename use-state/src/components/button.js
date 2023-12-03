import React, { useState } from "react";

export default function StateButton() {
  const [counter, setCounter] = useState(0);
  // i created a state named counter and pass 0 into it by useState(0)

  const increment = () => {
    setCounter(counter + 1);
  };
  // this 'increment'function sending new values to counter state by setCounter

  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );

  // i passed counter state into button
}
