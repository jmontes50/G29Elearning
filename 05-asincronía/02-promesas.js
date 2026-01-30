// const buscarNombre = (cb) => {
//   setTimeout(() => {
//     const res = Math.random(); //Da un num aleatorio de 0 a 1
//     // if(aleatorio > 0.3){
//     //   console.log("Encontrado!", aleatorio)
//     // }else {
//     //   console.log("No encontrado!!", aleatorio)
//     // }
//     cb(res);
//   }, 2000)
// }

// buscarNombre((res) => {
//   if(res > 0.3){
//       console.log("Encontrado!", res)
//     }else {
//       console.log("No encontrado!!", res)
//     }
// })

const buscarNombre = () => {
  return new Promise((resolve, reject) => {
    //aqui adentro puedo poner el código asíncrono
    setTimeout(() => {
      const res = Math.random(); //Da un num aleatorio de 0 a 1
      if(res > 0.3){
        resolve(`Lo encontramos , ${res}`); //positivo
      }else {
        reject(`No encontrado ${res}`); //negativo
      }
    }, 2000)
  })
}

buscarNombre()
.then((rpta) => { //resolve
  console.log(rpta)
}) //positivo
.catch((error) => { //reject
  console.log(error)
})//negativo
