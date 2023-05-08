// ! Tanpa menggunakan object.create() !

// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     let hasil = console.log(
//       `Halo ${this.nama}, Selamat Makan !. Energi anda sekarang ${this.energi}.`
//     );
//     return hasil;
//   },

//   main: function (lama) {
//     this.energi -= lama;
//     let hasil = console.log(
//       `Halo ${this.nama}, Selamat bermain !. Energi anda sekarang ${this.energi}.`
//     );
//     return hasil;
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//     let hasil = console.log(
//       `Halo ${this.nama}, Selamat tidur !. Energi anda sekarang ${this.energi}.`
//     );
//     return hasil;
//   },
// };

// function mahasiswa(nama, energi) {
//   let maha = {};
//   maha.nama = nama;
//   maha.energi = energi;

//   maha.makan = methodMahasiswa.makan;
//   maha.main = methodMahasiswa.main;
//   maha.tidur = methodMahasiswa.tidur;

//   return maha;
// }

// let ilham = mahasiswa("Ilham Syawal Mustaqim", 20);
// let jihan = mahasiswa("Jihan Febrizki", 20);

// ! Menggunakan object.create() !

// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     let hasil = console.log(
//       `Halo ${this.nama}, Selamat Makan !. Energi anda sekarang ${this.energi}.`
//     );
//     return hasil;
//   },

//   main: function (lama) {
//     this.energi -= lama;
//     let hasil = console.log(
//       `Halo ${this.nama}, Selamat bermain !. Energi anda sekarang ${this.energi}.`
//     );
//     return hasil;
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//     let hasil = console.log(
//       `Halo ${this.nama}, Selamat tidur !. Energi anda sekarang ${this.energi}.`
//     );
//     return hasil;
//   },
// };

// function mahasiswa(nama, energi) {
//   let maha = Object.create(methodMahasiswa);
//   maha.nama = nama;
//   maha.energi = energi;

//   return maha;
// }

// let ilham = mahasiswa("Ilham Syawal Mustaqim", 20);
// let jihan = mahasiswa("Jihan Febrizki", 20);

//   ! Menggunakan construction & Prototype !

function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  let hasil = console.log(
    `Halo ${this.nama}, Selamat Makan !. Energi anda sekarang ${this.energi}.`
  );
  return hasil;
};

Mahasiswa.prototype.main = function (lama) {
  this.energi -= lama;
  let hasil = console.log(
    `Halo ${this.nama}, Selamat main !. Energi anda sekarang ${this.energi}.`
  );
  return hasil;
};

Mahasiswa.prototype.tidur = function (jam) {
  this.energi += jam * 2;
  let hasil = console.log(
    `Halo ${this.nama}, Selamat tidur !. Energi anda sekarang ${this.energi}.`
  );
  return hasil;
};

let ilham = new Mahasiswa("Ilham Syawal M", 20);
let jihan = new Mahasiswa("Jihan Febrizki", 30);

// ! Dengan Class !

class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, Selamat Makan !. Energi anda sekarang ${this.energi}.`;
  }

  main(lama) {
    this.energi -= lama;
    return `Halo ${this.nama}, Selamat main !. Energi anda sekarang ${this.energi}.`;
  }

  tidur(jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, Selamat tidur !. Energi anda sekarang ${this.energi}.`;
  }
}

let shanum = new Mahasiswa("Shanum Ainun Azzahra", 30);
