const currentDate = new Date();

// Gerekli formatlama seçenekleri
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

const formattedDate = currentDate.toLocaleDateString("tr-TR", options);
console.log(formattedDate);
