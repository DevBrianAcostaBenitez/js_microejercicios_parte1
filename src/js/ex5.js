function ex5() {
  //coger numeros y compararlos
  var n1 = parseInt(document.getElementById("n5-1").value);
  var n2 = parseInt(document.getElementById("n5-2").value);
  var element = document.getElementById("ex5");
  if (n1 > n2) {
    element.textContent ="El numero " + n1 + " es mayor que " + n2 + ".";
  } else if (n2 > n1) {
    element.textContent = "El numero " + n2 + " es mayor que " + n1 + "."
  } else {
    element.textContent = "los numeros son iguales."
   
  }
}