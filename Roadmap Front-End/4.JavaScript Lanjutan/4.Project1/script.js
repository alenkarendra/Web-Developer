//! Percobaan 1

const tUbahWarna = document.getElementById("tUbahWarna");

tUbahWarna.onclick = function () {
  document.body.classList.toggle("birumuda");
};

//! Percobaan 2
// Create New Button
const tBaru = document.createElement("button");
const isiTBaru = document.createTextNode("Warna Acak");
tBaru.setAttribute("type", "button");
tBaru.appendChild(isiTBaru);
document.body.appendChild(tBaru);

tBaru.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ") ";
});

//! Percobaan 3
// Create New Element
const tBaruLagi = document.createElement("button");
const isitBaruLagi = document.createTextNode("Warna Awal");
tBaruLagi.setAttribute("type", "button");
tBaruLagi.appendChild(isitBaruLagi);
document.body.appendChild(tBaruLagi);

tBaruLagi.addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
});
