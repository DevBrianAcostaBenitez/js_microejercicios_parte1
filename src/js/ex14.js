function ex14() {
  //cogemos el numero y vemos los divisores son comunes con un bucle for 
    var n1 = parseInt(document.getElementById("n14-1").value);
    var n2 = parseInt(document.getElementById("n14-2").value);
    var element = document.getElementById("ex14");
    element.textContent = "Los divisores comunes de " + n1 + " y " + n2 + " son:"
  
    for (var i = 1; i <= n1; i++) {
      if (n1 % i === 0 && n2 % i === 0) {
        element.textContent += i +", ";
      }
    }
  }