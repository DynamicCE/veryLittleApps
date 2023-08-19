/*Soru:
Bir fonksiyon yazın, adı ogrenciBilgileri olsun. Bu fonksiyon, ilk parametre olarak öğrencinin adını, 
ikinci parametre olarak yaşını alacak. Üçüncü parametre ve sonrasında ise öğrencinin katıldığı 
derslerin isimlerini alacak. Fonksiyon, öğrencinin adını, yaşını ve katıldığı dersleri şu şekilde yazdırmalı:

yaml
Copy code
Ad: [Öğrenci Adı], Yaş: [Öğrenci Yaşı], Dersler: [Ders1], [Ders2], ...
Bu fonksiyonu rest operatörünü kullanarak yazın, böylece istediğimiz kadar ders ismi gönderebilelim.

Örnek Çıktı:
javascript
Copy code
ogrenciBilgileri('Ayşe', 20, 'Matematik', 'Fizik', 'Kimya');
// Çıktı: Ad: Ayşe, Yaş: 20, Dersler: Matematik, Fizik, Kimya
Bu kodu yazarken herhangi bir sorun yaşarsan veya yardıma ihtiyacın olursa, lütfen bana bildir! */

const ogrenciBilgileri = (ad, yas, ...dersler) => {
  return `Öğrenci adı: ${ad}, Yaş: ${yas}, alınan dersler: ${dersler.join(
    ","
  )}`;
};
const erkan = ogrenciBilgileri(
  "erkan",
  22,
  "matematik",
  "fizik",
  "javascript",
  "react"
);

console.log(erkan);
