const raiz_noticias = document.getElementById("raiz-noticias");

const raiz_articulos = document.getElementById("raiz-articulos");

console.log(raiz_articulos, raiz_noticias);

//esto es un STRING
raiz_noticias.innerHTML = raiz_noticias.innerHTML + `
  <p>texto párrafo 1 desde JS</p>
  <p>texto párrafo 2 desde JS</p>
  <p>texto párrafo 3 desde JS</p>
  <button id="btn">CLICK</button>
`;

const btn_noticias = document.querySelector("#btn");

btn_noticias.addEventListener("click", () => {
  console.log("Click!!!!")
})

//CREATE-ELEMENT
//creando un objeto pero con la plantilla de un elemento, en memoría
const btn_articulos = document.createElement("button");

console.log(btn_articulos);

btn_articulos.innerText = "Click para más artículos";

btn_articulos.style.color = "steelblue";

console.log(btn_articulos);

//appendChild podemos añadir un elemento como hijo de otro elemento
raiz_articulos.appendChild(btn_articulos);
