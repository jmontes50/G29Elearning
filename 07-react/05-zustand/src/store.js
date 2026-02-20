import { create } from 'zustand';

//necesitamos que tenga el prefijo us
//create va a pedir como argumento una función
//y esa función tiene que retornar un objeto
//set es es una funcion que permite actualizar el estado del store y tenemos que indicar cual es el cambio que queremos hacer, es decir, que propiedad del estado queremos actualizar y con que valor
const useContadorStore = create((set) => {
  return {
    //tenemos total flexibilidad para definir que almacenamos
    contador: 0, //definimos que queremos guardar en este store
    frutas: ['manzana', 'banana', 'naranja'], //podemos guardar cualquier tipo de dato, incluso objetos o arrays
    //podemos definir que acciones queremos ejecutar,
    subirAMil: () => set({ contador: 1000 }),
    incrementar: () => set((state) => ({ contador: state.contador + 1}))
  }
})

export default useContadorStore
