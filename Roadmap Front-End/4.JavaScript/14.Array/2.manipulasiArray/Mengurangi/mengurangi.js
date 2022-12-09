var satu = ["Ilham", "Syawal", "Mustaqim"];

satu[1] = undefined;
console.log(satu);

// !dengan pop
satu.pop();
console.log(satu);

// !dengan shift
satu.shift();
console.log(satu);

// !dengan slice
var dua = ["Ilham", "Syawal", "Mustaqim", "Jihan", "Febrizki"];
var tiga = dua.slice(3, 6);
console.log(tiga);
