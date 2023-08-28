const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve("işlem başarılı,kodun çalıştı");
    },2000);
})

// myPromise(); // bu şekildeki kullanım yanlış çünkü myPromise bir fonksiyon değil, onu böyle çağıramam.


console.log(myPromise);

// promise'ı yazdıktan sonra çağırmak için,dümdüz myPromise değişkenini yazarız,
// hiç parantez filan açmadan alta geçip .then ve .catch methodlarına fonksiyon göndeririz.

myPromise

.then((message)=>{
     console.log(message); 
})
.catch((error)   =>{
    console.log(error);
});
