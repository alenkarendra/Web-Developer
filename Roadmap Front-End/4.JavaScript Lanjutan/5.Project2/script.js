function getPilihanKomputer() {
  const komp = Math.random();

  if (komp < 0.34) return "gajah";
  if (komp >= 0.34 && komp < 0.67) return "orang";
  return "semut";
}

function getHasil(komp, player) {
  if (player == komp) return "SERI";
  if (player == "gajah") return komp == "orang" ? "MENANG" : "KALAH";
  if (player == "orang") return komp == "semut" ? "MENANG" : "KALAH";
  if (player == "semut") return komp == "gajah" ? "MENANG" : "KALAH";
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);

    const imgKomputer = document.querySelector(".img-komputer");
    imgKomputer.setAttribute("src", "img/" + pilihanKomputer + ".png");

    const info = document.querySelector(".info");
    info.innerHTML = hasil;
  });
});
