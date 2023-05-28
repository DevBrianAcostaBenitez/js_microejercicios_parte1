function ex10() {
  //cogemos la frase y hacemos un bucle for para ver cuantas vocales de cada hay
  var phrase = document.getElementById("frase10").value;
  var countA = 0;
  var  countE = 0;
  var  countI = 0;
  var  countO = 0;
  var  countU = 0;
  var element = document.getElementById("ex10");
  for (var i = 0; i <phrase.length; i++) {
    var char = phrase.charAt(i).toLowerCase();

    if (char === 'a') {
      countA++;
    } else if (char === 'e') {
      countE++;
    } else if (char === 'i') {
      countI++;
    } else if (char === 'o') {
      countO++;
    } else if (char === 'u') {
      countU++;
    }
  }
  element.textContent ="La 'a' aparece " +  countA + " veces. " + "La 'e' aparece " +  countE + " veces. "+ "La 'i' aparece " +  countI + " veces "+
   "La 'o' aparece " +  countO + " veces. "+ " y La 'u' aparece " +  countU + " veces. ";
}