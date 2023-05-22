// Ambil semua elemen video
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// pilih yg hanya js lanjutan
let jsLanjut = videos
  .filter((video) => video.innerHTML.includes("JAVASCRIPT LANJUTAN"))

  // ambil durasi dari tiap video
  .map((item) => item.dataset.duration)

  // convert ke float, dan rubah dari menit ke detik
  .map((waktu) => {
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  // total semua detiknya
  .reduce((total, awal) => total + awal);

// Ubah format ke jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan di DOM
const jmlVideo = videos.filter((video) =>
  video.innerHTML.includes("JAVASCRIPT LANJUTAN")
).length;
const pJumlah = document.querySelector(".jumlah-video");
pJumlah.innerHTML = jmlVideo + " video.";

const pDurasi = document.querySelector(".total-durasi");
pDurasi.innerHTML = `${jam} jam, ${menit} menit, ${detik} detik.`;


// Untuk selain Javascript lanjutan
//! Total waktunya
let bukanJs = videos
  .filter((video) => !video.innerHTML.includes("JAVASCRIPT LANJUTAN"))
  .map((item) => item.dataset.duration)
  .map((waktu) => {
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  .reduce((awal, akhir) => awal + akhir, 0);

//! Dipisah antara jam, menit, detik
const jam1 = Math.floor(bukanJs / 3600);
const lanjutan = bukanJs - jam1 * 3600;
const menit1 = Math.floor(lanjutan / 60);
const detik1 = lanjutan - menit1 * 60;

//! Di munculkan dengan DOM
const jumlahVideo = document.querySelector(".jumlahan-video");
const totalDurasi = document.querySelector(".totalan-durasi");

const lainnya = videos.filter(
  (video) => !video.innerHTML.includes("JAVASCRIPT LANJUTAN")
).length;
jumlahVideo.innerHTML = lainnya + " video.";

totalDurasi.innerHTML = `${jam1} jam, ${menit1} menit, ${detik1} detik.`