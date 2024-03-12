function valorParcela (valorVen, qtdParc){

    if(qtdParc == 1){
        //regras de negócio
        return (valorVen - valorVen * 0.10); // retorna o valor da parcela ja com o desconto
    }
    else if(qtdParc == 2){
        return valorVen*1.09 / qtdParc
    }
    else{
        return valorVen*1.1 / qtdParc
    }
}

function mostrarResultado (){

    //obtem os valores inseridos pelo usuario do html
    const n1 = parseFloat(document.getElementById('valorTotal').value);
    const n2 = parseInt(document.getElementById('qtdParcela').value);
    
    if(!isNaN(n1) && !isNaN(n2)){
        const resultado = valorParcela(n1, n2);

        document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
    }
    else{
        document.getElementById('resultado').innerText = 'Por favor, insira numeros válidos.'
    }
    
}
