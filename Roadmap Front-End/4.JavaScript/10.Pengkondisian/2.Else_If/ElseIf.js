var lagi = true;

while (lagi) {
  var angka = prompt("Masukan angka :");

  if (angka % 2 == 0) {
    alert(angka + " adalah bilangan GENAP");
  } else if (angka % 2 == 1) {
    alert(angka + " adalah bilangan GANJIL");
  } else {
    alert("yang anda masukan bukan ANGKA !");
  }

  lagi = confirm("apakah mau diulang ?");
}
