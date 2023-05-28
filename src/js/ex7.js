function ex7() {
    //cogemos la frase y hacemos un bucle for para ver cuantas 'a' hay
    var phrase = document.getElementById("frase7").value;
    var char = "a";
    var count = 0;
    var element = document.getElementById("ex7");
    for (var i = 0; i < phrase.length; i++) {
      if (phrase.charAt(i).toLowerCase() === char) {
        count++;
      }
    }
    element.textContent = "La letra 'a' aparece " + count + " veces en la frase."
  }