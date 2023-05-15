// Contoh 1
function tugas(matkul, selesai) {
  console.log(`Memulai dalam mengerjakan tugas ${matkul}...`);
  selesai();
}

function selesai() {
  setTimeout(() => {
    alert(`Tugas telah selesai dikerjakan`);
  }, 5000);
}

tugas("elins", selesai);

// Contoh lain
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(10, console.log);
repeat(5, alert);
