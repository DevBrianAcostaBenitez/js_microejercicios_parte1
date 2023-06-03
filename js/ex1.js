function ex1() {
// decir el elemento del documento donde se mostrará el texto
var element = document.getElementById("ex1");

// Creamos un elemento <h1>
var h1 = document.createElement("h1");

// ponemos contenido al h1
h1.textContent = "Hello JavaScript";

// metemos el h1 en el div
element.appendChild(h1);
}
document.addEventListener("DOMContentLoaded", function() {
     ex1();
  });