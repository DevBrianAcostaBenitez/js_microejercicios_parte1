function ex6() {
  //coger numeros y compararlos, dei nicio el "mayor" es el primero, pero si los otros dos le superan lo sustituyen
  var n1 = parseInt(document.getElementById("n6-1").value);
  var n2 = parseInt(document.getElementById("n6-2").value);
  var n3 = parseInt(document.getElementById("n6-3").value);
  var element = document.getElementById("ex6");
  var mayor = n1;
  if (n2 > mayor) {
    mayor = n2;
  }

  if (n3 > mayor) {
    mayor = n3;
  }

  if(n1==n2 && n1==n3){
    element.textContent = "los numeros son iguales."
  }else{
    element.textContent ="El numero " + mayor + " es el mayor,";
  }

}