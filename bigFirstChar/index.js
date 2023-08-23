let bigFirstChar = (word) => {
let first = word[0];
let rest = word.slice(1);
first = first.toUpperCase();
return first+rest ;
}

console.log(bigFirstChar("ahmet"));


// bu kod ilk karakteri büyük yapar.