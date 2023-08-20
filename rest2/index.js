const kitapBilgileri = (ad, yazar, ...baskiYillari) => {
  return `kitap adı: ${ad}, kitap yazarı: ${yazar}, baskı yılları: ${baskiYillari.join(
    ","
  )}`;
};
