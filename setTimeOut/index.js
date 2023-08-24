setTimeout(() => {
    console.log("3 saniye sonra çalıştı!");
  }, 3000);
  //setTimeOut o aralık sonra sadece bir kez çalışır
   
  clearTimeout
   
   
  const zamanlayici = setInterval(() => {
    console.log("Her 2 saniyede bir çalışır!");
  }, 2000);
  //setInterval o aralıklarla hep çalışır
   
  clearInterval(zamanlayici);





const askBelirteci =() =>{
    setTimeout(()=>{
        console.log(`${1000} mili saniye gecti yar,sen gelmedin`) 
    },1000);
} 

// bunu bu sekilde yazamayız, setTimeout() , asenkron bi fonk olduğu için...

// onun yerine setTimeout'u fonksiyon içine atıp onu çağırabiliriz.
askBelirteci();


