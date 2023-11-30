import React from "react";

export default function CustomButton({ onClick, label }) {
  return (
    <div>
      <button onClick={onClick}>{label}</button>
    </div>
  );
}
// komponente props olarak "function" keywordünü gönderemedim çünkü function bir reserved keyword.

<CustomButton
  onClick={() => {
    console.log("Button clicked!");
  }}
  label="touch me"
/>;
// onClick içerisine bi fonksiyon yazıyoruz ()=>{}
