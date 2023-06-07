// dasar rest parameter => menghasilkan bentuk array kembali

// Bentuk awal
function fungsi() {
  //   return Array.from(arguments);
  return arguments;
}

console.log(fungsi(1, 2, 3));
console.log("--------");
console.log("--------");
console.log("--------");

// Cara rest parameter
const myFunc = (...Arg) => {
  return Arg;
};

console.log(myFunc(1, 2, 3, 4, 5));
console.log("--------");
console.log("--------");
console.log("--------");

// Penjumalahan dengan for of
const jumlah = (...angka) => {
  let total = 0;
  for (const x of angka) {
    total += x;
  }
  return total;
};

console.log(jumlah(1, 2, 3, 4, 5));
console.log("--------");
console.log("--------");
console.log("--------");

// Penjumlahan dengan reduce
function sum(...apa) {
  return apa.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5));
console.log("--------");
console.log("--------");
console.log("--------");

// Array destructuring
const kelompok1 = ["ilham", "jihan", "shanum", "anak2"];
const [ketua, wakil, ...anggota] = kelompok1;

console.log(wakil);
console.log(anggota);
console.log("--------");
console.log("--------");
console.log("--------");

// Object destructuring
const team = {
  pm: "ilham",
  frontend1: "papap",
  frontend2: "ibun",
  backend1: "shanum",
  ux: "anak2",
  devops: "anak3",
};
const { pm, ...anggota1 } = team;

console.log(pm);
console.log(anggota1);
console.log("--------");
console.log("--------");
console.log("--------");

// Contoh kasus
function filter(type, ...isinya) {
  return isinya.filter((x) => typeof x === type);
}

console.log(
  filter("number", 1, 2, 3, 4, 5, "udul", 12344, "ilham", true, 21321, "ibun")
);
