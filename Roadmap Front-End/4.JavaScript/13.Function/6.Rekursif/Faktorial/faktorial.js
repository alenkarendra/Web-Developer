var n = parseInt(prompt("Masukan Nilai :"));

function faktorial(n) {
  if (n === 0) return 1;
  return n * faktorial(n - 1);
}

alert("Hasil faktorialnya adalah : " + faktorial(n));
