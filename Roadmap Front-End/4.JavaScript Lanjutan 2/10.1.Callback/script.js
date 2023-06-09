// Callback

// Synchronous function
function halo(nama) {
  alert(`Halo, ${nama}`);
}

function pesan(callback) {
  const nama = prompt("Masukan Nama :");
  callback(nama);
}

pesan(halo);

// atau seperti ini

function tampil(name) {
  const isi = prompt("Masukkan nama :");
  name(isi);
}

tampil((isi) => alert(`Halo, ${isi}`));

// Asynchronous Function
