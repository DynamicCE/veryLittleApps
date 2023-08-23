// reduce metodu dizi elemanlarını soldan sağa doğru işleyerek dizinin elemanlarını tek bir değere indirger
// Başlangıç değeri sağlamazsanız, reduce ilk elemanı başlangıç değeri olarak alır ve işleme ikinci elemandan başlar.

// örnek, dizinin elemanlarını toplama

// let sayilar = [1,2,3,4,5,6,7];

// const sonuc = sayilar.reduce((sonuc,anlikDeger)=>{
//     return sonuc + anlikDeger;
// });

// sonuc;


// şimdi bunu bi fonksiyon olarak yazalım ve herhangi bir dizinin bütün elemanlarını toplasın.

let toplayici = (arr) =>{
     return arr.reduce((sonuc,anlikDeger)=>{
        return sonuc + anlikDeger;
    });
}

// fonksiyonu yazdık, bir dizi tanımlayalım ve fonksiyona gönderelim.

let numbers = [1,2,5,7,9,3];

console.log(toplayici(numbers))


