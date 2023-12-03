import React, { useState } from "react";

export default function StateBank() {
  const [myState, setMyState] = useState("sıfırıncı değer");
  return <div>benim state'im bu; {myState}</div>;
}
// myState state adı
// setMyState state'i güncelleyecek fonksiyon
//useState() ile de değer atıyoruz
