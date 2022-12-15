// ! Obejct Literal
var mhs1 = {
  nama: "Ilham Syawal Mustaqim",
  NIM: "24040117140041",
  email: "ilhamsyawal87@gmail.com",
  Jurusan: "Fisika",
};

var mhs2 = {
  nama: "Jihan Febrizki",
  NIM: "24040117140040",
  email: "jihanfbrz87@gmail.com",
  Jurusan: "Fisika",
};

//  ! Function declaration
function mahasiswa(nama, nim, email, jurusan) {
  var maha = {};
  maha.nama = nama;
  maha.nim = nim;
  maha.email = email;
  maha.jurusan = jurusan;
  return maha;
}

var maha3 = mahasiswa("jihan", "240401121312", "asdjaksd@gmail.com", "fisika");

// ! Constructor
function Mahasiswa(nama, nim, email) {
  this.nama = nama;
  this.nim = nim;
  this.email = email;
}

var mhs4 = new Mahasiswa("kanjuut", "titit", "asdmasda@gmail.com");
