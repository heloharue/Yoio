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

//4-
//O await pausa apenas a função onde ele está.O restante do programa continua rodando normalmente, enquanto a função assíncrona espera a resposta (da API ou banco de dados), o JavaScript fica livre para executar outras tarefas, atualizar a tela ou responder aos cliques do usuário.

