// filter , bi dizideki tüm elemanları belli bir koşula göre filtreleyip yeni bir dizi döndüren methoddur.

let sayilar = [1,2,3,4,5,6,7,8,9,10];




const ciftler = sayilar.filter(sayi => sayi%2==0);

ciftler

// filter bir fonksiyon alır parametre olarak, bu fonksiyon filter'in içinde tanımlanırsa bir isme ihtiyacı olmaz.


let userList = ["conan","ceylin","cebbas","ferhunde","kitabei","erkan"];

let basHarf = (isim) =>{
    return isim[0] == "c";
}

const basHarfC = userList.filter(basHarf);
basHarfC


