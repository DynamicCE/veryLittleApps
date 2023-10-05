import react from "react";

function App() {
  const [isLoggedIn, isAdmin] = [true, true];

  return (
    <>
      isLoggedIn ? <p>Hoşgeldiniz, giriş yapıldı</p> : <p>Giriş yapınız</p>
      isLoggedIn && isAdmin && <p>Admin girişi</p>{" "}
      {/* if isLoggedIn and isAdmin is true, then render <p>Admin girişi</p> */}
    </>
  );
}
App();

{
  /* if(isLoggedIn){ 
    <p>Hoşgeldiniz, giriş yapıldı</p>
} */
}
