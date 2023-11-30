import React from "react";

function Introduce(props) {
  return (
    <>
      <p>{`selam, ben ${props.name}`}</p>
    </>
  );
}
{
  /* BİR KOMPONENTE DEĞİŞKEN GÖNDERMEK İÇİN PROPS KULLANIYORUZ */
}
{
  /* FONKSİYONA PARAMETRE OLARAK PROPS GİRİYORUZ 
VE FONKSİYONUN İÇİNDE O PROPSU KULLANIYORUZ.
*/
}

function Destructuring({ name }) {
  return (
    <div>
      <p>
        I can use that name props like this {name} , instead of using the name
        "props"
      </p>
    </div>
  );
}
export default Introduce;
export { Destructuring };
