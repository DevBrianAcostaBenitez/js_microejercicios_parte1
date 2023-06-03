function ex4() {
    //coger numeros, sumarlos y mostrar resultado
    var n1 = parseInt(document.getElementById("n4-1").value);
    var n2 = parseInt(document.getElementById("n4-2").value);
    var result = n1 + n2;
    var element = document.getElementById("ex4");
    element.textContent = "La suma de " + n1 + " + " + n2 + " es " + result + ".";
  }
