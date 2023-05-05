// Mengingat cara untuk membuat object pada javascript

//  1. Object Revisited
let mahasiswa1 = {
  nama: "ilham Syawal Mustaqim",
  Energi: 10,

  makan: function (porsi) {
    this.Energi += porsi;
    console.log(`Halo ${this.nama}, Selamat Makan!`);
  },
};

let mahasiswa2 = {
  nama: "Shanum Ainun Azzahra",
  Energi: 10,
};

//  2. Function Declaration
function mahasiswa(nama, energi) {
  let maha = {};
  maha.nama = nama;
  maha.energi = energi;

  maha.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, Selamat makan!`);
  };
  return maha;
}

let ilham = mahasiswa("ilham syawal mustaqim", 10);
let shanum = mahasiswa("shanum ainun azzahra", 200);

//  3. Constructor Function
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    let hasil = console.log(
      `Halo ${this.nama}, Selamat Makan !. Energi anda sekarang ${this.energi}.`
    );
    return hasil;
  };

  this.main = function (lama) {
    this.energi -= lama;
    let hasil = console.log(
      `Halo ${this.nama}, Selamat bermain !. Energi anda sekarang ${this.energi}.`
    );
    return hasil;
  };
}

let jihan = new Mahasiswa("Jihan Febrizki", 20);

//  4. Object.create
