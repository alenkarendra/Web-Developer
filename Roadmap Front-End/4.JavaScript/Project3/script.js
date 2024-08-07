function Angkot(nama, jurusan, penumpang, kas) {
  this.nama = nama;
  this.jurusan = jurusan;
  this.penumpang = penumpang;
  this.kas = kas;

  //   Penumpang Naik
  this.penumpangNaik = function (namaPenumpang) {
    if (penumpang.length === 0) {
      this.penumpang.unshift(namaPenumpang);
      return this.penumpang;
    }

    for (var i = 0; i < penumpang.length; i++) {
      if (this.penumpang[i] == undefined) {
        this.penumpang[i] = namaPenumpang;
        return this.penumpang;
      } else if (this.penumpang[i] == namaPenumpang) {
        alert("Si " + namaPenumpang + " Udh ada diangkot");
        return this.penumpang;
      } else if (i == this.penumpang.length - 1) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
      }
    }
  };

  //   Penumpang Turun
  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (penumpang.length === 0) {
      alert("Angkot kosong");
      return namaPenumpang;
    }

    for (var i = 0; i < penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      } else if (i == this.penumpang.length - 1) {
        alert(namaPenumpang + " Gada di angkot");
        return namaPenumpang;
      }
    }
  };
}

var angkot1 = new Angkot("ilham", "ciomas-bogor", [], 0);
var angkot2 = new Angkot("Abdul", "Bogor-ciapus", [], 0);
