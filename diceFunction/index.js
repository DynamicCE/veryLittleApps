let randomNum = ()=>{
   return Math.floor(Math.random()*6 +1);  // math.random , 0 ile 0.99 arasında bi sayı üretir 
}
// math.floor da virgüllü sayıyı bir küçük tam sayıya yuvarlar.
console.log(randomNum());
