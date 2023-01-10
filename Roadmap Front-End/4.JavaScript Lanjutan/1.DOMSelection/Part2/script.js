//! DOM Selection

// getElementById() -> Menghasilkan element
const judul = document.getElementById("judul");
judul.style.color = "blue";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "Ilham Syawal";

// document.getElementsByTagName() -> Menghasilkan HTML Collection
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "red";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

// document.getElementsByClassName() -> Menghasilkan HTML Collection
const p1 = document.getElementsByClassName("paragraf")[0];
p1.innerHTML = "Dari JavaScript ni boss !!!";

// document.querySelector() -> Menghasilkan element
const p4 = document.querySelector("#b p");
p4.innerHTML = "halo semuanya";
p4.style.fontSize = "40px";

const li2 = document.querySelector("#b ul li:nth-child(2)");
li2.style.backgroundColor = "blue";

// document.querySelectorAll() -> Menghasilkan nodelist
const h = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.fontSize = "20px";
}

// Mengotak-atik node root
const sectionB = document.getElementById("b");
const paragrafB = sectionB.querySelector("p");
paragrafB.innerHTML = "uwaw uwaw";
