// ! Pake var

for (var x = 0; x < 10; x++) {
  console.log(x);
}

console.log(x);

console.log("---");
console.log("---");
console.log("---");

// ! pake invoked function expression

(function () {
  for (var y = 0; y < 10; y++) {
    console.log(y);
  }
})();

console.log(y);

console.log("---");``
console.log("---");
console.log("---");

// ! Pake let

for (let index = 0; index < 5; index++) {
  console.log(index);
}

console.log(index);
