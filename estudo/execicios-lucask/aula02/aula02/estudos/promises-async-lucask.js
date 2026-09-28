// 1. Em uma frase, sem código: o que é uma Promise?
// É uma promessa de um valor futuro 

// 2. Quais os três estados possíveis de uma Promise?
//pending ainda não sabemos o resultado, está em andamento
//fulfilled deu certo, o valor está disponível
//rejected deu errado, temos um motivo de erro

// 3. Reescreva usando async/await o código abaixo, que hoje usa .then
async function executarBusca() {
    try {
        const produto = await buscarProduto(3);console.log(produto);
         } 
         catch (erro) {console.log(erro);
    }
}

// 4. O que exatamente await pausa: o programa inteiro ou só a função onde ele está?
// O await pausa apenas a execução da função assíncrona onde ele está

// 5. Por que colocar await dentro de uma função que não é async dá erro?
//pois se nao colocar ele vai parar o fluxo principal do programa

// 6. Escreva uma função assíncrona chamada buscarProduto que recebe um id, espera 1 segundo e devolve o objeto
