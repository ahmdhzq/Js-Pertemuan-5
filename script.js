let inputAngka = prompt("Masukan angka")
let nilai = parseInt(inputAngka)

let hasil;
if (inputAngka % 2 == 0) {
    hasil = "Bilangan " + nilai + " Adalah Angka Genap";
} else {
    hasil = "Bilangan " + nilai + " Adalah Angka Ganjil";
}
alert(hasil);