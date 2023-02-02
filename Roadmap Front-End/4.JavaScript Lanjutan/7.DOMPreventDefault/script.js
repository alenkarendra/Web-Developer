//! Prevent Default

// Contoh
const close = document.querySelectorAll(".card");

close.forEach(function (banyak) {
  banyak.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  });
});
