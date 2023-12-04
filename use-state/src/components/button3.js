import React, { useState } from "react";

export default function Button3() {
  const [Button3, setButton3] = useState(0);
  const onClicka = () => {
    setButton3(Button3 + 3);
  };
  return (
    <div>
      <p>{Button3}</p>
      <button onClick={onClicka}>TIKLA BANA</button>
    </div>
  );
}
