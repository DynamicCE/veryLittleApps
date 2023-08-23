let sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sayilar2= [1,3,4,5];
const kareleri =(arr) =>  {
    return arr.map(sayi => sayi * sayi); ;
};

console.log(kareleri(sayilar));