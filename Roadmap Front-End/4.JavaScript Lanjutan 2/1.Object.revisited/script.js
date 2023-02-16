// Cara untuk membuat object pada javascript
//  1. Object Revisited
let mahasiswa1 = {
  nama: "ilham Syawal Mustaqim",
  Energi: 10,

  makan: function (porsi) {
    this.Energi += porsi;
    console.log(`Halo ${nama}, Selamat Makan!`);
  },
};

let mahasiswa2 = {
  nama: "Shanum Ainun Azzahra",
  Energi: 10,
};
//  2. Function Declaration
//  3. Constructor Function
//  4. Object.create
