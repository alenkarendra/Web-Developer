var n = parseInt(prompt("Masukan Nilai : "));

function cetak(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  cetak(n - 1);
}

cetak(n);
