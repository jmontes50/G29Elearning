const titulo_tarea = document.getElementById("titulo-tarea");
const desc_tarea = document.getElementById("descripcion-tarea");
const btn_tarea = document.getElementById("btn-tarea");
const lista_tareas = document.getElementById("lista-tareas");

const arrTareas = [];

btn_tarea.addEventListener("click", () => {
  //el value es el valor que tiene un input en html
  console.log(titulo_tarea.value);
  console.log(desc_tarea.value);
  //creamos un nuevo Obj con la info de la nueva tarea
  const nuevaTarea = {
    titulo: titulo_tarea.value,
    descripcion: desc_tarea.value
  }
  //lo agregamos a un array
  arrTareas.push(nuevaTarea);
  console.table(arrTareas);

  //limpiamos los input para escribir de nuevo
  titulo_tarea.value = "";
  desc_tarea.value = "";

  dibujarTareas(arrTareas);
})

const dibujarTareas = (tareas) => {
  lista_tareas.innerHTML = ""; //limpiando

  tareas.forEach((item) => {
    //en ves de hacer esto
    // lista_tareas.innerHTML = lista_tareas.innerHTML + `
    //   <div>${item.titulo}</div>
    // `;
    const nuevoDivTarea = ComponenteTarea(item);
    lista_tareas.appendChild(nuevoDivTarea);
  })
}

const ComponenteTarea = (objTarea) => {
  console.log(objTarea);
  //de esta manera se puede crear un elemento, desde el lado de JS
  const nuevoDiv = document.createElement("div");
  console.log(nuevoDiv)
  nuevoDiv.innerHTML = `
    <label>${objTarea.titulo}</label>
    <button class="btn-lista">Ver Info</button>
  `;
  const btn_lista = nuevoDiv.querySelector(".btn-lista");
  btn_lista.addEventListener("click", () => {
    alert(objTarea.descripcion);
  })
  return nuevoDiv;
}
