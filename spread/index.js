/* Aşağıdaki iki diziyi birleştirmek için spread operatörünü kullanarak bir kod yazabilir misin?


const meyveler = ["elma", "muz", "armut"];
const sebzeler = ["patates", "havuç", "brokoli"];
*/

/* const func = (dizi1,dizi2) => {
    return `${...dizi1},${...dizi2}`;

}

const meyveler = ["elma", "muz", "armut"];
const sebzeler = ["patates", "havuç", "brokoli"];
console.log(func(meyveler,sebzeler)) */

// hatam spread operatörünü backtik içinde kullanmaktı,
//spread dizi içinde kullanılır yani köşeli parantez içinde.

const func = (dizi1, dizi2) => {
  return [...dizi1, ...dizi2];
};

const meyveler = ["elma", "muz", "armut"];
const sebzeler = ["patates", "havuç", "brokoli"];
console.log(func(meyveler, sebzeler));
