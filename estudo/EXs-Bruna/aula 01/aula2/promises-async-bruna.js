//1-O que é uma Promise?
//Uma Promise (promessa) em JavaScript é um objeto que representa o resultado futuro de uma operação assíncrona, como uma requisição a uma API ou a leitura de um arquivo.

//2- Quais os três estados possíveis de uma Promise?
//Os três estados possíveis de uma Promise em JavaScript são pendente (pending), cumprida (fulfilled) e rejeitada (rejected).
//Pendente (pending): O estado inicial. A operação assíncrona ainda está em andamento e o resultado final ainda não está disponível. 
// Cumprida (fulfilled): A operação foi concluída com sucesso e a promessa agora possui um valor definido 
// Rejeitada (rejected): A operação falhou e a promessa possui um motivo ou erro associado.

//3-
async function buscarEExibirProduto() {
  try {
    const produto = await buscarProduto(3);
    console.log(produto);
  } catch (erro) {
    console.log(erro);
  }
}

//1-O que é uma Promise?
//Uma Promise (promessa) em JavaScript é um objeto que representa o resultado futuro de uma operação assíncrona, como uma requisição a uma API ou a leitura de um arquivo.

//2- Quais os três estados possíveis de uma Promise?
//Os três estados possíveis de uma Promise em JavaScript são pendente (pending), cumprida (fulfilled) e rejeitada (rejected).
//Pendente (pending): O estado inicial. A operação assíncrona ainda está em andamento e o resultado final ainda não está disponível. 
// Cumprida (fulfilled): A operação foi concluída com sucesso e a promessa agora possui um valor definido 
// Rejeitada (rejected): A operação falhou e a promessa possui um motivo ou erro associado.

//3-
async function buscarEExibirProduto() {
  try {
    const produto = await buscarProduto(3);
    console.log(produto);
  } catch (erro) {
    console.log(erro);
  }
}

//4-O que exatamente await pausa: o programa inteiro ou só a função onde ele está?
//O await pausa apenas a função onde ele está.O restante do programa continua rodando normalmente, enquanto a função assíncrona espera a resposta (da API ou banco de dados), o JavaScript fica livre para executar outras tarefas, atualizar a tela ou responder aos cliques do usuário.

//5-Por que colocar await dentro de uma função que não é async dá erro?
// Dá erro porque o interpretador precisa que a função seja assíncrona para saber como pausar e retomar a execução do código sem travar o programa inteiro.

//6-
async function buscarProduto(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: id, nome: "Produto " + id });
        }, 1000);
    });
}

//7- O que está errado neste código?
//O principal erro no  código é que esta sendo usanda a palavra-chave await dentro de uma função que não foi declarada como async, sempre que utiliza await em JavaScript, a função precisa obrigatoriamente ter o prefixo async.

//8-
async function carregar() { 
  const resposta = await fetch( "https://exemplo.com/api" ); 
  const dados = await resposta.json(); 
  console.log(dados); 
}

//9- Qual a diferença entre a requisição falhar (sem internet, servidor fora do ar) e o servidor responder com erro (por exemplo, status 404)? Por que fetch sozinho não lança um erro no segundo caso?
//A diferença direta é que falha na requisição é um problema de conexão (sem internet), enquanto resposta com erro (404) significa que a conexão funcionou, mas o servidor não achou o que você pediu. O fetch não lança erro no formato 404 porque a comunicação de rede foi concluída com sucesso. Para o fetch, a missão dele de levar e trazer a mensagem foi cumprida, ele só lança erro se a mensagem nem conseguir chegar ao destino.

//10- Por que rodar produtos.map(async (p) => await buscarDetalhe(p.id)) não espera todos os detalhes chegarem antes de continuar o código?
//O Array.prototype.map() é uma função síncrona e não espera o await terminar. Quando passa uma função async para o map, ela retorna uma Promise imediatamente. Por isso, o map gera apenas um array de Promises pendentes e o JavaScript continua executando o código abaixo.
