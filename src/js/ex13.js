function ex13() {
    //cogemos el numero y vemos porque numero es divisible con un bucle for  
    var n = parseInt(document.getElementById("n13").value);
    var element = document.getElementById("ex13");
    element.textContent = n+ " es divisible por:"
    for (var i = 1; i <= n; i++) {
        if (n / i === 0) {
            element.textContent += i+ ", "
        }
    }
}