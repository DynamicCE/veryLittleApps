const myAsyncFunction = async () => {
    const message = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("İşlem 3 saniye sonra tamamlandı!");
      }, 3000);
    });
  // promise'dan farklı olarak fonksiyonumuz async kelimesini alır. 
  // promise'ımız da await anahtar kelimesini alır
    console.log(message);
  };
  
  myAsyncFunction();
  

  // Asenkron bir işlemi temsil eden promise :
  /*
  const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("yazi yazildi");
    },2000);
  });

  myPromise
  .then((message)=>{
    console.log(message);
  })
  .catch((error)=>{
    console.log(error);
  }); 
  */

  // Asenkron fonksiyon

  const myFunction = async () =>{
    return await new Promise((resolve,reject){
      // code in here
    });
  }