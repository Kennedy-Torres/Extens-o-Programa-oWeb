    // lista declarada vazia para inserir as transações
    let transacoes = [];

    // Função para adicionar uma transação
    function addTransacao() {
        const type = document.getElementById("transacao-type").value;
        const valor = parseFloat(document.getElementById("valor").value);
        const description = document.getElementById("description").value;

        if(valor && description){ // se forem inicializados o bloco é verdadeiro, senão alerta:"insira todos os campos"
            
            transacoes.push({ type, valor, description }); // Adiciona a transação dentro da lista 

            //document.getElementById("transacao-form").reset() // limpa os campos de input, porem limpa o tipo escolhido tbm

            // Atualiza o relatório
            exibirRelatorio();
        }else{
            alert("Preencha todos os campos fornecidos")
        }
        
    }

    // Função para gerar relatório
    function exibirRelatorio() {
        const reportBody = document.getElementById("report-body");
        //const reportFooter = document.getElementById("report-footer"); // não é necessário

        reportBody.innerHTML = "";

        let totalExpenses = 0;
        let totalIncome = 0;

        // Exibir cada transação individualmente
        for (let transacao of transacoes) {
            const row = `<tr>
                            <td>${transacao.type === 'expense' ? 'Despesa' : 'Receita'}</td>
                            <td>${transacao.valor.toFixed(2)}</td>
                            <td>${transacao.description}</td>
                        </tr>`;
            reportBody.insertAdjacentHTML("beforeend", row);

            // Calcula o total de despesas e receitas
            if (transacao.type === 'expense') {
                totalExpenses += transacao.valor;
            } else {
                totalIncome += transacao.valor;
            }
        }

        // exibe os valores totais no footer da tabela
        document.getElementById("total-expenses").textContent = totalExpenses.toFixed(2);
        document.getElementById("total-income").textContent = totalIncome.toFixed(2);
    }