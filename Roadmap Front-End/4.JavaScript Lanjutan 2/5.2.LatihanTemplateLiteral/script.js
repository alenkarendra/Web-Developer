//! HTML Fragments

const mhs = {
  nama: "Ilham Syawal M",
  umur: 24,
  NIM: "24040117140041",
  email: "ilhamsyawal87@gmail.com",
};

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="nim">${mhs.NIM}</span>
</div>`;

document.body.innerHTML = el;

//! Looping

const mhs1 = [
  {
    nama: "Ilham syawal m",
    email: "ilhamsyawal87@gmail.com",
  },
  {
    nama: "Jihan Febrizki",
    email: "jihanfebrizki@gmail.com",
  },
  {
    nama: "shanum ainun azzahra",
    email: "shanumainun@gmail.com",
  },
];

const al = `<div class="mhs">
${mhs1
  .map(
    (x) =>
      `<ul>
      <li>${x.nama}</li>
      <li>${x.email}</li>
    </ul>`
  )
  .join("")}
</div>`;

document.body.innerHTML = al;

//! kondisional
const lagu = [
  {
    judul: "Tetap Dalam Jiwa",
    penyanyi: "Isyana Sarasvati",
  },
  {
    judul: "Kau Adalah",
    penyanyi: "Isyana Sarasvati",
    feat: "Rayi Putra",
  },
];

const ul = `<div class="lagu">
${lagu
  .map(
    (y) =>
      `<ul>
    <li>${y.judul}</li>
    <li>${y.penyanyi} ${y.feat ? `, (${y.feat})` : ""}</li>
</ul>`
  )
  .join("")}
</div>`;

document.body.innerHTML = ul;

//! Nested

const lagi = {
  nama: "Ilham Syawal M",
  semester: 5,
  mataKuliah: [
    "Rekayasa Web",
    "Analisis dan Perancangan Sistem Informasi",
    "Pemrograman Sistem Interaktif",
    "Perancangan Sistem Berorientasi Object",
  ],
};

function printMatkul(print) {
  return `
    <ol>
        ${print.map((x) => `<li>${x}</li>`).join("")}
    </ol>`;
}

const ol = `<div class="again">
    <h2>${lagi.nama}</h2>
    <span class="semester">${lagi.semester} Semester</span>
    <h4> Mata Kuliah :</h4>
    ${printMatkul(lagi.mataKuliah)}
</div>`;

document.body.innerHTML = ol;
