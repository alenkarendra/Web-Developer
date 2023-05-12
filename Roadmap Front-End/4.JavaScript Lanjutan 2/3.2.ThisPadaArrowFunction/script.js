// Contoh 1

const box = document.querySelector(".box");

box.addEventListener("click", function () {
  //   let satu = "size";
  //   let dua = "contain";

  //   if (this.classList.contains(satu)) {
  //     [satu, dua] = [dua, satu];
  //   }

  this.classList.toggle("size");
  setTimeout(() => {
    this.classList.toggle("contain");
  }, 600);
});

// Contoh 2

const Mahasiswa = function () {
  this.nama = "Ilham";
  this.umur = 24;

  this.sayHello = () => {
    console.log(`Halo, Nama saya ${this.nama}, saya berumur ${this.umur}`);
  };

  setInterval(() => {
    console.log(this.umur++);
  }, 1000);
};

let ilham = new Mahasiswa();
