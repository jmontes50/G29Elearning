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
  //estamos definiendo que propiedades tendrá la clase
  constructor (Nombre, Direccion, Email, Password) {
    //this.nombre = nombre //no hay problema en utilizar el mismo nombre/variable, se diferencian con this
    this.nombre = Nombre;
    this.direccion = Direccion;
    this.email = Email;
    this.password = Password;
  }
}

//instanciar, instancia
const usuario2 = new User("Victor", "Av", "victor@codigo.edu.pe", "aqp");
const usuario3 = new User("Jorge", "Av", "jorge@codigo.edu.pe", "ceviche");

console.log(usuario2);
console.log(usuario3);
