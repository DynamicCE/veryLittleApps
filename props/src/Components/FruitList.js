import React from "react";

export default function FruitList({ fruits }) {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li>{fruit}</li>
      ))}
    </ul>
  );
}
{
  /* map metodu içine fonksiyon yazıyoruz. ()=>{}
 içteki fonksiyona gönderdiğim ilk eleman ,
üzerinde işlem yapılacak elemeandır.*/
}
