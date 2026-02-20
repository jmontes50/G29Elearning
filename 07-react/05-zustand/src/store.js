import { create } from 'zustand';

//necesitamos que tenga el prefijo us
//create va a pedir como argumento una función
//y esa función tiene que retornar un objeto
const useContadorStore = create((set) => {
  return {
    //tenemos total flexibilidad para definir que almacenamos
    contador: 0, //definimos que queremos guardar en este store
    //podemos definir que acciones queremos ejecutar,
    subirAMil: () => set({ contador: 1000 }),
    incrementar: () => set((state) => ({ contador: state.contador + 1}))
  }
})

export default useContadorStore
