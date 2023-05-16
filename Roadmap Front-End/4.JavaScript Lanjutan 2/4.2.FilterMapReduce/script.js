const angka = [-1, 9, 8, 4, -5, 10, 6, 9, 0];

//! filter (Mencari angka >= 3)

// dengan for

const newAngka = [];
for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) {
    newAngka.push(angka[i]);
  }
}
console.log(newAngka);

// dengan filter

// const filterAngka = angka.filter(function (a) {
//     return a >= 3;
//   });

const filterAngka = angka.filter((a) => a >= 3);
console.log(filterAngka);

console.log("-------------------------------------");
console.log("-------------------------------------");
console.log("-------------------------------------");

//! Map

const mapAngka = angka.map((a) => a * 2);
console.log(mapAngka);

console.log("-------------------------------------");
console.log("-------------------------------------");
console.log("-------------------------------------");

//! Reduce
const reduceAngka = angka.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(reduceAngka);

console.log("-------------------------------------");
console.log("-------------------------------------");
console.log("-------------------------------------");

//! Method Chaining
// cari angka lebih dari 4, terus kali 2, baru total
const hasil = angka
  .filter((a) => a > 4)
  .map((a) => a * 2)
  .reduce((acc, curr) => acc + curr, 0);
console.log(hasil);
