const kalem1 = {
  yaziBoyut: 0.7,
  renk: "mavi",
  fiyat: "13$",
  marka: "faber",
};
const kalem2 = {
  yaziBoyut: 0.9,
  renk: "mor",
  fiyat: "15$",
};

console.log((kalemler = { ...kalem1, ...kalem2 }));

// NOT: console.log içinde var,let,const kullanılmaz.
// 2. nesnenin özellikleri 1. yi yutar.
