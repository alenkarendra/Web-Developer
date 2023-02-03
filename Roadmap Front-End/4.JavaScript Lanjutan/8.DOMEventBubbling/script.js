//! Event Bubbling

// Contoh;
const close = document.querySelectorAll(".close");

close.forEach(function (banyak) {
  banyak.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
    e.stopPropagation();
  });
});

const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
  card.addEventListener("click", function (e) {
    alert("hi");
  });
});

// //! Yg lebih mudah

// const container = document.querySelector(".container");

// container.addEventListener("click", function (e) {
//   if (e.target.className == "close") {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault();
//   } else if (e.target.className == "card") {
//     alert("ini Kartu");
//   } else if (e.target.className == "nama") {
//     alert("ini Nama");
//   } else if (e.target.className == "foto") {
//     alert("ini Foto");
//   } else if (e.target.className == "telp") {
//     alert("ini No Telepon");
//   }
// });
