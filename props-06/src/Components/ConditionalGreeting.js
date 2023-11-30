import React from "react";

export default function WelcomeMessage({ user }) {
  return <p>Welcome {user.isLoggedIn ? user.name : "Guest"} </p>;
}
{
  /* komponentler içinde koşullu ifade yazacaksam,
ternary operators kullanabilirim */
}
<WelcomeMessage user={{ name: "erkan", isLoggedIn: true }} />;
{
  /* Komponenti çağırırken ona user nesnesini veriyorum 
burada birinci köşeli parantez jsx kullandığım için, 
ikinci köşeli parantez de nesne tanımlarken kullandığımız köşeli parantez */
}
