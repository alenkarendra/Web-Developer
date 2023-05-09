function init() {
  let nama = "ilham";
  function panggilNama() {
    console.log(nama);
  }
  panggilNama();
}
init();

// ! Contoh Penggunaan

function ucapanSalam(waktu) {
  return function (nama) {
    console.log(
      `Halo ${nama}, Selamat ${waktu}, semoga hari-mu menyenangkan !`
    );
  };
}

let selamatPagi = ucapanSalam("Pagi");
let selamatSiang = ucapanSalam("Siang");
let selamatMalam = ucapanSalam("Malam");

selamatPagi("ilham");
selamatSiang("jihan");

// ! Menggunakan tambahan immediately invoked function expression (kurung functionnya dan jalankan)

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());
