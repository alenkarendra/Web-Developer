alert("Perhitungan total dari 2 volume kubus");

function volume(a, b) {
  var V1, V2, total;

  V1 = a * a * a;
  V2 = b * b * b;

  total = V1 + V2;

  return total;
}

alert("Hasilnya adalah : " + volume(5, 3));
alert("Hasilnya adalah : " + volume(10, 10));
alert("Hasilnya adalah : " + volume(8, 3));
