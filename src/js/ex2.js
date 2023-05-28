function ex2() {
      // numeros y la suma
      var n1 = 3;
      var n2 = 5;
      var result = n1 + n2;
      //mostramos el resultado
      var element = document.getElementById("ex2");
      element.textContent = "La suma de " + n1 + " + " + n2 + " es " + result + ".";
    }
    document.addEventListener("DOMContentLoaded", function() {
         ex2();
      });