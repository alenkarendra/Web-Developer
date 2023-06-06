const mhs = ["ilham", "jihan", "shanum"];
const dosen = ["papap", "ibun", "anak"];

// Contoh spread Operator
console.log(...mhs);
console.log(...mhs[0]);

// Contoh untuk penggabungan array
const orang = mhs.concat(dosen);
console.log(orang);

console.log(...orang, ...dosen);
console.log(...mhs, "adalah", ...dosen);

// Contoh untuk copy array
const mhs1 = [...mhs];
mhs1[0] = "papap";
console.log(mhs1);

// Contoh mengambil nilai dari html
//dengan cara biasa
const nilai = document.querySelectorAll("ul li");
const isi = [];
for (let i = 0; i < nilai.length; i++) {
  isi.push(nilai[i].textContent);
}
console.log(isi);

//dengan map
const isi1 = [...nilai].map((x) => {
  return x.textContent;
});
console.log(isi1);

//! Contoh penggunaan spread operator

const nama = document.querySelector(".nama");

const huruf = [...nama.textContent].map((x) => `<span>${x}</span>`).join("");

nama.innerHTML = huruf;
