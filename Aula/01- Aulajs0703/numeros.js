var i;
for (i = 0; i < 4; i++) {
    var input = prompt("Digite um numero")
    var n = Number(input);

    if (!isNaN(n)) {
        if (n % 2 == 0) {
            document.write("Numero Par "+n+"<br>"); 
            alert("Numero Par " + n);
        } else {
            document.write("Numero Impar " + n+"<br>");
            alert("Numero Impar " + n);
        }

    } else {
        document.write("Numero inválido: "+input+"<br>")
        alert("Numero inválido")
    }

}

/*
var i;
for (i = 0; i < 4; i++) {
    var input = prompt("Digite um numero");
    var n = Number(input);

    if (isNaN(n)) {
        document.write("Número inválido: '" + input + "'<br>");
    } else {
        if (n % 2 == 0) {
            document.write("Numero Par " + n + "<br>");
        } else {
            document.write("Numero Impar " + n + "<br>");
        }
    }
}
*/