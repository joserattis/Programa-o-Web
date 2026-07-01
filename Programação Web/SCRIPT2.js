// Aguarda o usuário clicar no botão para iniciar o cálculo
document.getElementById('btnCalcular').addEventListener('click', function() {
    
    // Declaração das variáveis iniciais
    const rendimento = 0.01; // 1% ao mês
    let saldo = 0;
    
    // Captura o elemento da lista no HTML para injetar os resultados
    const listaResultados = document.getElementById('listaResultados');
    
    // Limpa a lista caso o usuário clique no botão mais de uma vez
    listaResultados.innerHTML = "";

    // Laço de repetição para percorrer exatamente os 4 meses solicitados no problema
    for (let mes = 1; mes <= 4; mes++) {
        let textoTransacao = "";

        // Condições para as movimentações financeiras no início de cada mês específico
        if (mes === 1) {
            saldo += 500;
            textoTransacao = "Depósito inicial de R$ 500,00";
        } else if (mes === 2) {
            saldo += 200;
            textoTransacao = "Depósito adicional de R$ 200,00";
        } else if (mes === 3) {
            saldo -= 50;
            textoTransacao = "Saque de R$ 50,00";
        } else if (mes === 4) {
            textoTransacao = "Nenhuma movimentação (apenas rendimento)";
        }

        // Após a movimentação do mês, aplica-se o rendimento de 1%
        saldo += saldo * rendimento;

        // Formata o valor final para o padrão monetário brasileiro (BRL)
        let saldoFormatado = saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        // Cria dinamicamente um item de lista (<li>) no HTML
        let itemLista = document.createElement('li');
        itemLista.innerHTML = `
            <strong>Mês ${mes}:</strong> ${textoTransacao} <br>
            Saldo no final do mês: <strong class="valor-destaque">${saldoFormatado}</strong>
        `;

        // Adiciona o item criado dentro da <ul> na tela
        listaResultados.appendChild(itemLista);
    }
});