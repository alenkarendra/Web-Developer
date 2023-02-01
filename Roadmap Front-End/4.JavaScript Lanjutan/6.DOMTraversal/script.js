// const kartu = document.querySelector(".card");
// const ngapus = kartu.getElementsByClassName("close")[0];

// ngapus.addEventListener("click", function () {
//   kartu.style.display = "none";
// });

//! DOM Traversal

// Contoh 1
const close = document.querySelectorAll(".card");

close.forEach(function (banyak) {
  banyak.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
  });
});

// Contoh 2
const nama = document.querySelector(".nama");

console.log(nama.previousElementSibling);
console.log(nama.parentElement);
