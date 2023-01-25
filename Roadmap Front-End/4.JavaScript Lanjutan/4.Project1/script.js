//! Percobaan 1 => Merubah warna background jadi birumuda

const tUbahWarna = document.getElementById("tUbahWarna");

tUbahWarna.onclick = function () {
  document.body.classList.toggle("birumuda");
};

//! Percobaan 2 => Merubah warna background jadi random

// Create New Button
const tBaru = document.createElement("button");
const isiTBaru = document.createTextNode("Warna Acak");
tBaru.setAttribute("type", "button");
tBaru.appendChild(isiTBaru);
tUbahWarna.after(tBaru);

tBaru.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ") ";
});

//! Percobaan 3 => Merubah warna background jadi putih

// Create New Element
const tBaruLagi = document.createElement("button");
const isitBaruLagi = document.createTextNode("Warna Awal");
tBaruLagi.setAttribute("type", "button");
tBaruLagi.appendChild(isitBaruLagi);
tBaru.after(tBaruLagi);

tBaruLagi.addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
});

//! Percobaan 4 => Merubah warna background dari input range

const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

sMerah.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;

  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

sHijau.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;

  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

sBiru.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;

  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

//! Percobaan 5 => Menginformasikan mengenai nilai dari RGB

const hasilMerah = document.getElementById("red");
const hasilHijau = document.getElementById("green");
const hasilBiru = document.getElementById("blue");

sMerah.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;

  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";

  hasilMerah.innerHTML = r;
  hasilHijau.innerHTML = g;
  hasilBiru.innerHTML = b;
});

sHijau.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;

  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";

  hasilMerah.innerHTML = r;
  hasilHijau.innerHTML = g;
  hasilBiru.innerHTML = b;
});

sBiru.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;

  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";

  hasilMerah.innerHTML = r;
  hasilHijau.innerHTML = g;
  hasilBiru.innerHTML = b;
});
