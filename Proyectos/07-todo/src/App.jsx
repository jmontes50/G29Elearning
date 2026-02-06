/**
 * 1. de donde obtengo los datos
 */
import { useState } from "react";

const App = () => {
  const [tareas, setTareas] = useState([]);
  const [inputTarea, setInputTarea] = useState(""); //componentes controlados

  const manejarInput = (e) => {
    console.log(e.target.value);
    setInputTarea(e.target.value);
  };

  const anadirTarea = () => {
    //hace una copia del array de tareas con un spread operator y le añade la nueva tarea al final
    setTareas([...tareas, inputTarea]);
    //limpiamos el input después de añadir la tarea
    setInputTarea("");
  };

  console.log(tareas);

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
        <button onClick={anadirTarea}>Añadir</button>
        <hr />
        <div>
          {tareas.map((tarea, index) => (
            <div key={index}>{tarea}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
