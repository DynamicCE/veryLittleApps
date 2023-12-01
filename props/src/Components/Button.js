import React from "react";

export default function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}
// butona props olarak fonksiyon gönderdim
<Button label={"merhaba"} onClick={() => console.log("button clicked")} />;
