/**
 * 1. de donde obtengo los datos
 * 1.1 que datos necesitamos manejar (tareas, inputTarea)
 * 2. Que acciones vamos a realizar (añadir tarea, eliminar tarea)
 * 3. Como se va a mostrar la información (mapear el array de tareas)
 * 4. Que eventos vamos a manejar (onChange del input, onClick del botón)
 * 5. Implementar la lógica de cada acción (añadir tarea, eliminar tarea), tenemos que pensar en datos mas que la interfaz, es decir, como vamos a modificar el estado de las tareas y el inputTarea
 * 6. Probar que todo funciona correctamente
 */
import { useState } from "react";

const App = () => {
  const [tareas, setTareas] = useState([]);
  const [inputTarea, setInputTarea] = useState(""); //componentes controlados

  const manejarInput = (e) => {
    console.log(e.target.value);
    setInputTarea(e.target.value);
  };

  const eliminarTarea = (index) => {
    const tareasFiltradas = tareas.filter((tarea, i) => {
      return i !== index;
    });
    setTareas(tareasFiltradas);
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
            <div key={index}>
              <label>{tarea}</label>
              <button onClick={() => eliminarTarea(index)}>Eliminar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
