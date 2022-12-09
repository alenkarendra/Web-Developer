var jumlahAngkot = 10;
var angkotBeroperasi = prompt("Masukan Total Angkot yg beroperasi: ");
var angkotLembur = prompt("Masukan No. Angkot yg lembur: ");
var noAngkot = 1;

for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
  } else if (noAngkot == angkotLembur) {
    console.log("Angkot No. " + noAngkot + " sedang lembur.");
  } else {
    console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
  }
}
