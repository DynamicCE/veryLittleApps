// koşul ? ifade1 : ifade2
/* Eğer koşul doğruysa (truthy), ifade1 değerlendirilir ve döndürülür.
 Eğer koşul yanlışsa (falsy), ifade2 değerlendirilir ve döndürülür.
*/

const yasTespit = (yas) => {
  let tespit;
  yas > 18
    ? yas > 24
      ? (tespit = "yetişkin")
      : (tespit = "genç")
    : (tespit = "çocuk");
  return console.log(tespit);
};

yasTespit(32);
