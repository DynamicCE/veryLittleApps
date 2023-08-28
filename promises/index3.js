const myPromise = new Promise((resolve,reject)=>{
    let rand = Math.floor(Math.random() *9);
    if(rand>5){
        resolve("sayı 5 den büyük");
    }else reject("sayı 5 den küçük");
})

myPromise
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
});