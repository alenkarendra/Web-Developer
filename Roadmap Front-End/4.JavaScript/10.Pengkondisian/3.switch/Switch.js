var item = prompt(
  "Masukan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)"
);

switch (item) {
  case "nasi":
    alert("Makanan sehat !");
    break;

  case "daging":
    alert("Makanan sehat !");
    break;

  case "susu":
    alert("Minuman sehat !");
    break;

  case "softdrink":
    alert("Minuman tidak sehat !");
    break;

  case "hamburger":
    alert("Makanan tidak sehat !");
    break;

  default:
    alert("Makanan / minuman gajelas !");
    break;
}
