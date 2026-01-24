const usuario = {
  nombre: "Jorge",
  direccion: "Av.",
  email:"osmarmontes50@gmail.com",
  password: "4231231"
}

//Si necesitamos muchos usuarios, esta estrategia puede no ser la mejor
console.log(usuario);

//necesitamos que su nombre comience con mayúsculas
//pensemos en una clase como una fábrica o un molde
class User {
  //indicar que propiedades tendrá el objeto
  nombre;
  direccion;
  #email;
  //dentro de la clase las propiedades privadas si son referenciables
  #password; //al darle el numeral indicamos que es privado
  //estamos definiendo que propiedades tendrá la clase
  constructor (Nombre, Direccion, Password) {
    //this.nombre = nombre //no hay problema en utilizar el mismo nombre/variable, se diferencian con this
    this.nombre = Nombre;
    this.direccion = Direccion;
    // this.#email = Email;
    this.#password = Password;
  }
  //getter - obtener / leer, va a ser un método/función que me permite obtener
  get email() {
    return this.#email;
  }
  //setter -
  set email(nuevoEmail) {
    //includes verifica si hay algo dentro de un string
    if(!nuevoEmail.includes('@')){
      throw new Error("El correo es inválido!!!");
    }
    this.#email = nuevoEmail;
  }
  verificarPassword (password) {
    return this.#compararPassword(password);
  }

  //no es nada más que una función dentro de la clase
  #compararPassword (password) {
    return this.#password === password;
  }
}

//instanciar, instancia
const usuario2 = new User("Victor", "Av", "aqp");
const usuario3 = new User("Jorge", "Av", "ceviche");

console.log(usuario2);

console.log(usuario2.verificarPassword("aqp"));

// usuario.password = "anticuchos";
// console.log(usuario)

// usuario3.password = "adobo";

usuario3.email = "j@gmail.com";

console.log(usuario3.email);
