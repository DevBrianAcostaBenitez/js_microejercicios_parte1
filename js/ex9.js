function ex9() {
    //cogemos la frase y hacemos un bucle for para ver cuantas vocales hay
    var phrase = document.getElementById("frase9").value;
    var count = 0;
    var element = document.getElementById("ex9");
  for (var i = 0; i < phrase.length; i++) {
    var char = phrase.charAt(i).toLowerCase();
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        count++
    }
  }
   
    element.textContent = "Aparecen " + count +" vocales";
  }