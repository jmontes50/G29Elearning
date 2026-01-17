let album = {
  nombre: "Debí tirar mas fotos",
  genero: ["Caribeña", "Reguetón", "Salsa", "Dembow"],
  productores: ["Jonathan 'Yoni' Asperil", "Justo Barreto"],
  canciones: [
    {
      nombre: "Nueva yol",
      duracion: 3.03
    },
    {
      nombre: "Baile Inolvidable",
      duración: 0.07
    }
  ],
  certificacion: {
    organismo: {
      nombre: "FIMI",
      pais: "Italia",
      ventas: 16000000,
      rango: "Platino x 4"
    }
  }
}
console.log(album.canciones[1].nombre);
console.log(album.certificacion.organismo.rango);

let nums = [1,2,3,4,5];

nums.push(6);

console.log(nums);

let pi = 3.14159;

console.log(pi.toFixed(2));

// let texto = "Hola mundo";
let texto = new String("Hola mundo");

console.log(texto.toUpperCase());
console.log(texto + " como estás?");


