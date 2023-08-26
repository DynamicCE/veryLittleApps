const wait = (ms) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Beklendi: ${ms} milisaniye`);
      }, ms);
    });
  };
  
  wait(1000).then((result) => {
    console.log(result); // "Beklendi: 1000 milisaniye" yazdırır
  });



  const myPromise = new Promise((resolve, reject) => {
    let condition = false; // Bu koşulu değiştirerek Promise'ın nasıl çalıştığını gözlemleyebiliriz
  
    if (condition) {
      resolve('İşlem başarıyla tamamlandı.');
    } else {
      reject('Bir hata oluştu.');
    }
  });
  
  myPromise
    .then((message) => {
      console.log(message); // İşlem başarıyla tamamlandı.
    })
    .catch((error) => {
      console.log(error); // Bir hata oluştu.
    }); //.
  