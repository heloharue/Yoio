const obterNome = produto => produto.nome

const emEstoque = produtos.filter(p => p.estoque > 0).map(obterNome)
const estoqueMaiorQue5 = produtos.filter(p => p.estoque > 5).map(obterNome);
