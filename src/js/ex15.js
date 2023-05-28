function ex15() {
   //cogemos el numero y vemos los divisores son comunes con un bucle for , el bucle termina tras pasar de la raiz cuadrada, un numero no es divisible por numeros pasados la raiz cuadrada
    var n = parseInt(document.getElementById("n15").value);
    var element = document.getElementById("ex15");
    if (isPrime(n)) {
        element.textContent = n + " es un número primo.";
      } else {
        element.textContent = n + " no es un número primo.";
      }
    }
    
    function isPrime(n) {
      if (n <= 1) {
        return false;
      }
    
      for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
          return false;
        }
      }
    
      return true;   
}