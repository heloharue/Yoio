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
function buscarProduto(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, nome: "Produto " + id });
    }, 1000);
  });
}

//7 O que está errado neste código?
// o erro é que esta marcada como wait mas o certo é usar o async

//8 Complete o trecho abaixo para imprimir o corpo da resposta já convertido em objeto:
const dados = await resposta.json();

//9. Qual a diferença entre a requisição falhar (sem internet, servidor fora do ar) e o servidor responder
//com erro (por exemplo, status 404)? Por que fetch sozinho não lança um erro no segundo caso?

//Quando a requisição falha não foi possível conectar ao servidor, como quando não há internet. Já o erro 404 significa que o servidor respondeu mas não encontrou o que foi pedido. O fetch não considera o 404 uma falha de conexão.

//10. Por que rodar produtos.map(async (p) => await buscarDetalhe(p.id)) não espera todos os detalhes
//chegarem antes de continuar o código?

//Porque o map cria várias Promises e não espera elas terminarem e para esperar todas usamos Promise.all()