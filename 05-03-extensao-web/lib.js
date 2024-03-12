function somarNumeros (n1, n2){
    return n1 + n2;
}

function mostrarResultado (){

    //obtem os valores inseridos pelo usuario do html
    const n1 = parseFloat(document.getElementById('numero1').value);
    const n2 = parseFloat(document.getElementById('numero2').value);
    
    if(!isNaN(n1) && !isNaN(n2)){
        const resultado = somarNumeros(n1, n2);

        document.getElementById('resultado').innerText = `A soma de ${n1} e ${n2} é: ${resultado}`;
    }
    else{
        document.getElementById('resultado').innerText = 'Por favor, insira numeros válidos.'
    }
    
}
