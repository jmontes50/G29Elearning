const saludar = (nombre) => {
  return `Hola ${nombre}, como estás?`
}

const IGV = 1.18;

//supongamos data es lo más importante
const data = [
  "React", "JS", "Babel", "Vite"
]
//Si exportamos 01 sola cosa, usamos default
export default data;

//si son varias usamos las llaves y exportamos cada referencia por su nombre
export {
  saludar,
  IGV
}
