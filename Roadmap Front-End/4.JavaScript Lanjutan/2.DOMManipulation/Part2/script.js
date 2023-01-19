// DOM Manipulation Part2

//! Percobaan 1
// Buat element dan isinya
const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("Paragraf baru");

// Penggabungan
pBaru.appendChild(teksPBaru);

// Tangkep parent
const sectionA = document.getElementById("a");

// Show di akhir section a
sectionA.appendChild(pBaru);

//! Percobaan 2
// Buat Element
const liBaru = document.createElement("li");
const isinya = document.createTextNode("Item Baru");

// Penggabungan
liBaru.appendChild(isinya);

// Tangkep parent 
const sectionB = document.querySelector("section#b ul");
const li2 = sectionB.querySelector("li:nth-child(2)");

// Show di HTML
sectionB.insertBefore(liBaru, li2);

//! Percobaan 3
const link = document.getElementsByTagName("a")[0];

sectionA.removeChild(link);

//! Percobaan 4
const bagian2 = document.getElementById("b");
const p4 = bagian2.getElementsByTagName("p")[0];

const h2Baru = document.createElement("h2");
const isiH2 = document.createTextNode("Halo semuanya");

h2Baru.appendChild(isiH2);

bagian2.replaceChild(h2Baru, p4);

// Informasi
pBaru.style.backgroundColor = "lightgreen";
liBaru.style.backgroundColor = "lightgreen";
h2Baru.style.backgroundColor = "lightgreen";
