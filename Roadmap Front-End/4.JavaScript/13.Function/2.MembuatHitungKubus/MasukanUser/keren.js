var a = parseInt(prompt("Masukan Panjang Kubus 1 :"));
var b = parseInt(prompt("Masukan Panjang Kubus 2 :"));

function volume(a, b) {
  var V1, V2, total;

  V1 = a * a * a;
  V2 = b * b * b;

  total = V1 + V2;

  return total;
}

alert("Hasilnya adalah : " + volume(a, b));
