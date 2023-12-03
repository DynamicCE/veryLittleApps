import React, { useState } from "react";

export default function StateButton2() {
  const [myState, setMyState] = useState(0);
  const increment = () => {
    setMyState(myState + 2);
  };
  return (
    <div>
      <p>{myState}</p>
      <button onClick={increment}>Artır</button>
    </div>
  );
}
