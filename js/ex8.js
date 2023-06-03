function ex8() {
    //cogemos la frase y hacemos un bucle for para ver que vocales hay
    var phrase = document.getElementById("frase8").value;
    var vowels = "";
    var element = document.getElementById("ex8");
  for (var i = 0; i < phrase.length; i++) {
        var char = phrase.charAt(i).toLowerCase();
    if (char === 'a' && vowels.indexOf('a') === -1) {
        vowels += 'a ';
      } else if (char === 'e' && vowels.indexOf('e') === -1) {
        vowels += 'e ';
      } else if (char === 'i' && vowels.indexOf('i') === -1) {
        vowels += 'i ';
      } else if (char === 'o' && vowels.indexOf('o') === -1) {
        vowels += 'o ';
      } else if (char === 'u' && vowels.indexOf('u') === -1) {
        vowels += 'u ';
  }
    element.textContent = "Las vocales que parecen son: "+ vowels;
  }
}