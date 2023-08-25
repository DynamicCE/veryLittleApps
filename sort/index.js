// JavaScript'teki sort metodu, bir diziyi belirli bir sıralama kriterine göre sıralamak için kullanılır.
//Bu metod, diziyi yerinde sıralar, yani orijinal diziyi değiştirir.


const numbers = [1,5,6,2,8,3];

let sonuc = numbers.sort((a,b)=>{
    return a-b;
})
console.log(sonuc); // sayıları küçükten büyüğe sıraladı

// eğer fonksiyon negatif bir değer döndürseydi, 'a' 'b' den önce gelirdi. (yani a, b den kücükse önceye gelir)
// eğer fonksiyon pozitif bi değer döndürseydi 'a' 'b' den sonra gelirdi   (yani a ,b den büyükse sonraya gelir)
// buradaki a ve b, karşılaştırma işlemi sırasında yanyana gelen iki elemanı temsil eder.

// şimdi eğer biz bu diziyi küçükten büyüğe değil de, büyükten küçüğe sıralamak isteseydik, böyle yazarıdık;

let sonuc2 = numbers.sort((a,b)=>{
    return b-a;
});

console.log(sonuc2);

// burada da fonksiyonun negatif değer döndürmesi için a 'nın büyük olması lazım.
// negatif değer döndürünce a önce geliyordu unutmayalım, bu yüzden de büyük sayılar öne gelir.