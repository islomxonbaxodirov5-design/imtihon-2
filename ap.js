// 100.Quyidagi namunani kuzatgan holda funksiya yasang.
// Namuna:
// Namuna("div*2") ➞ "<div></div><div></div>"
// Namuna("p*1") ➞ "<p></p>"
// Namuna("li*3") ➞ "<li></li><li></li><li></li>"
//
//
//
//
// 101.Funksiya butun son qabul qilsa, 1dan ushbu butun
// songacha bo’lgan sonlar yig’indisini qaytarsin.
// Namuna:
// namuna(3) ➞ 6
// // 1 + 2 + 3 = 6
// namuna(10) ➞ 55
// // 1 + 2 + 3 + ... + 10 = 55
// namuna(7) ➞ 28
// // 1 + 2 + 3 + ... + 7 = 28
// /
//
//
//
// 102.Funskiya son va object qabul qiladi. Objectni ichida min va
// max degan propertilar mavjud. Agar ushbu son min va maxni
// oralig’ida bo’lsa funksiya true qaytarsin, aks holda false
// Namuna:
// Namuna(4, { min: 0, max: 5 }) ➞ true
// Namuna(4, { min: 4, max: 5 }) ➞ true
// Namuna(4, { min: 6, max: 10 }) ➞ false

// function Namuna(str) {
//   const [teg, soni] = str.split("*");
//   return `<${teg}></${teg}>`.repeat(Number(soni));
// }
// console.log(Namuna("div*2"));
// console.log(Namuna("p*1"));
// console.log(Namuna("li*3"));

function Namuna(str) {
  const [teg, soni] = str.split("*");
  return `<${teg}></${teg}>`.repeat(Number(soni));
}

function namuna(n) {
  return (n * (n + 1)) / 2;
}

console.log(namuna(3));
console.log(namuna(10));
console.log(namuna(7));
