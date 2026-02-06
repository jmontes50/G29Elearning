/**
 * 1. de donde obtengo los datos
 */
import { useState } from "react"

const App = () => {
  const [tareas, setTareas] = useState([]);
  const [inputTarea, setInputTarea] = useState(""); //componentes controlados

  const manejarInput = (e) => {
    console.log(e.target.value);
    setInputTarea(e.target.value);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Nueva Tarea"
          value={inputTarea}
          // Es el evento que se dispara cuando el valor del input cambia
          onChange={manejarInput}
        />
        <button>Añadir</button>
      </div>
    </div>
  )
}

export default App
