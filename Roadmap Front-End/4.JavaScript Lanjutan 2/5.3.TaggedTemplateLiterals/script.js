// Templates biasa
const nama = "Ilham Syawal M";
const umur = 24;

const str = `Halo, nama saya ${nama} dan saya berumur ${umur}`;

// Tagged Template
function coba(strings, ...values) {
  return strings.reduce((x, y, i) => `${x}${y}${values[i] || ""}`, "");
}

const str1 = coba`Halo, nama saya ${nama}, saya berumur ${umur}`;

console.log(str1);

//! Contoh untuk highlight
const nama1 = "Ilham Syawal M";
const umur1 = 24;
const email = "ilhamsyawal87@gmail.com";

function high(strings, ...values) {
  return strings.reduce(
    (x, y, i) => `${x}${y}<span class="hl">${values[i] || ""}</span>`
  );
}

const str2 = high`Halo, nama saya ${nama1}, saya berumur ${umur1} dan memiliki email : ${email}`;

document.body.innerHTML = str2;
