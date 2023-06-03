function ex1112() {
    //cogemos el numero y vemos si es divisible  por 2, 3 ,5 o 7con un bucle for 
    var n = parseInt(document.getElementById("n1112").value);
    var element = document.getElementById("ex1112");
    var text =""
    if (n / 2 === 0) {
        text  += n + " es divisible por 2. ";
    }

    if (n /3 === 0) {
        text  += n + " es divisible por 3. ";
    }

    if (n / 5 === 0) {
        text  += n + " es divisible por 5. ";
    }

    if (n / 7 === 0) {
        text += n + " es divisible por 7. ";
    }

    if (n / 2 !== 0 && n / 3 !== 0 && n / 5 !== 0 && n/ 7 !== 0) {
        element.textContent = n + " no es divisible por 2, 3, 5 ni por 7.";
    }
        element.textContent = text
}