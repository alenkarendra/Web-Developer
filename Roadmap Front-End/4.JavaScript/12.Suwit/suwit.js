alert("Selamat bermain SUWIT");
var lagi = true;

while (lagi === true) {
  // Menanyakan pilihan user
  var p = prompt("Silahkan pilih :" + "\ngajah, orang, semut.");

  //komputer milih
  // pake bilangan random biar komputer milihnya random
  var komp = Math.random();

  if (komp < 0.34) {
    komp = "gajah";
  } else if (komp >= 0.34 && komp < 0.67) {
    komp = "orang";
  } else {
    komp = "semut";
  }

  // buat peraturan
  var hasil = "";

  if (p == komp) {
    hasil = "SERI";
  } else if (p == "gajah") {
    if (komp == "orang") {
      hasil = "MENANG";
    } else {
      hasil = "KALAH";
    }
  } else if (p == "orang") {
    hasil = komp == "semut" ? "MENANG" : "KALAH";
  } else if (p == "semut") {
    hasil = komp == "gajah" ? "MENANG" : "KALAH";
  } else {
    hasil = "HARUS BACA ULANG SOALNYA!!!";
  }

  // menunjukan hasil
  alert(
    "Kamu memilih : " +
      p +
      "\nKomputer memilih : " +
      komp +
      "\nMaka hasilnya kamu : " +
      hasil
  );

  lagi = confirm("Coba lagi ?");
}

// menanyakan mau ulang lagi ga
alert("Terima kasih telah bermain :)");
