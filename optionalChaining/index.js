/* Optional chaining, JavaScript'te bir nesnenin özelliğine erişirken, 
bu özelliğin veya ara özelliklerin undefined veya null olup olmadığını kontrol etmek için kullanılan bir kısayoldur.
 Bu, kodun daha kısa ve okunabilir olmasına yardımcı olur.
Normalde, bir nesnenin iç içe geçmiş özelliklerine erişirken, her adımda özelliğin var olup olmadığını kontrol etmemizgerekir. 
Eğer kontrol etmezsek ve özellik yoksa, bir TypeError alırız.
Optional chaining ile, ?. operatörünü kullanarak bu kontrolü daha kısa bir şekilde yapabiliriz
*/


const kullaniciBilgisi =(kullanici) =>{
 const adres =   kullanici?.adres?.sehir;
 const yas = kullanici?.yas;
 const boy = kullanici?.boy;
 const alan = kullanici?.alan;
 return {yas,boy,alan,adres};
};

const kullanici1 = {
    ad:"ali",
    yas:16,
    boy:1.65,
};

const kullanici2 = {
   
    ad : "zeynep",
    boy : 1.70,
    alan : "sayısal",
    adres : {
        sehir : "muğla",
        ilce : "bodrum",
        mahalle : "telek"
    },
}
const ayse = kullaniciBilgisi(kullanici2);
console.log(ayse);

console.log(kullaniciBilgisi(kullanici1));


