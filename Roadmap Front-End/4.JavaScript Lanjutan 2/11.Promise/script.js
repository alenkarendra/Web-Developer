// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=dca61bcc&s=avengers",
//   success: (movies) => console.log(movies),
//   error: (e) => console.log(e.responseText),
// });

//! Ajax versi vanilla JS

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// };
// xhr.open("get", "http://www.omdbapi.com/?apikey=dca61bcc&s=avengers");
// xhr.send();

//! fetch menggantikan ajax versi vanilla JS

// const movies = fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=avengers")
//   .then((response) => response.json())
//   .then((response) => console.log(response));
// console.log(`----------------`);
// console.log(`----------------`);
// console.log(`----------------`);

//! Promise
// Object yg merepresentasikan keberhasilan / kegagalan sebuah event yg asynchronous dimasa yg akan datang

// Contoh pertama = tanpa delay
let ditepati = true;
const janji1 = new Promise((resolve, reject) => {
  if (ditepati) {
    resolve("Janji telah ditepati!");
  } else {
    reject("Ingkar Janji...");
  }
});

janji1
  .then((response) => console.log(`ok, ${response}`))
  .catch((response) => console.log(`Tidak ok, ${response}`));

console.log(`----------------`);
console.log(`----------------`);
console.log(`----------------`);

// Contoh kedua = dengan delay
let hasil = false;
const janji2 = new Promise((resolve, reject) => {
  if (hasil) {
    setTimeout(() => {
      resolve("Ditepati setelah menunggu 2 detik");
    }, 2000);
  } else {
    setTimeout(() => {
      reject("Gagal mendapatkan setelah 5 detik");
    }, 5000);
  }
});

console.log("mulai");
janji2
  .finally(() => console.log(`Terima kasih telah menunggu`))
  .then((response) => console.log(`ok, ${response}`))
  .catch((response) => console.log(`Tidak ok, ${response}`));
console.log("Selesai");
console.log(`----------------`);
console.log(`----------------`);
console.log(`----------------`);

// Promise all = menjalankan semua promise

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avengers",
        Sutradara: "ilham",
        pemeran: "ibun, shanum",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Bandung",
        temp: 25,
        kondisi: "cerah parah",
      },
    ]);
  }, 6000);
});

Promise.all([film, cuaca]).then((response) => {
  const [x, y] = response;
  console.log(x);
  console.log(y);
});
