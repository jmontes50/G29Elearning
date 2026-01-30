// const buscarNombre = () => new Promise ((resolve, reject) => {
//   const res = Math.random();
//   if(res > 0.4){
//     resolve("Encontrado!");
//   }else{
//     reject("No encontrado!!!!")
//   }
// })

const buscarNombre = async () => {
  const res = Math.random();
  if(res > 0.4){
    return "Encontrado!"; //resolve
  }else{
    throw "No encontrado" //reject
  }
}

// buscarNombre()
// .then((rpta) => {
//   console.log(rpta);
// })
// .catch((error) => {
//   console.log(error);
// })

const ejecutar = async () => {
  try { //intenta esto
    const rpta = await buscarNombre(); //await lo que hace es esperar al resultado de la promesa
    console.log(rpta);
  } catch (error) { //y si encuentras un error muestramelo
    console.log(error)
  }
}
ejecutar();

