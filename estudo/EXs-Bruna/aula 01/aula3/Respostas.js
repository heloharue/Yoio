//1- Esqueça de propósito. Comente a linha desenhar() de dentro do clique. Adicione uma tarefa. O dado entrou no vetor? Como você prova isso? E a tela, o que mostra?
//O dado entrou no vetor, mas a tela não mostra a nova tarefa, porque a função desenhar() não foi chamada para atualizar a tela. Para provar que o dado entrou no vetor, podemos inspecionar o console do navegador e verificar o conteúdo do array tarefas após adicionar a nova tarefa.

//2-Perca o que foi digitado. Coloque um <input> dentro de cada <li>. Digite algo em um deles e clique em Adicionar. O que aconteceu com o que você digitou? Explique a causa.
//O que foi digitado no input dentro do <li> foi perdido ao clicar em Adicionar. Isso acontece porque a função desenhar() recria toda a lista de tarefas, substituindo os elementos existentes no DOM, incluindo os inputs, e assim o valor digitado é perdido.

//3- Conte quantos lugares. Faça a tela mostrar também quantas tarefas estão feitas e um aviso quando a lista estiver vazia. Quantos trechos diferentes do código você precisou tocar?
//Para mostrar quantas tarefas estão feitas e um aviso quando a lista estiver vazia, precisei tocar em três trechos diferentes do código:
//1. Adicionei uma contagem de tarefas feitas na função desenhar().
//2. Adicionei uma verificação para exibir um aviso quando a lista estiver vazia.
//3. Atualizei o HTML para incluir elementos que exibam essas informações.      

//4-Quebre a cola. Renomeie no HTML o id="lista" para id="listaTarefas" e não mexa no JavaScript. O navegador reclama? Onde e quando o erro aparece?
//Sim, o navegador reclama. O erro aparece no console do navegador quando a função desenhar() é chamada, pois ela tenta acessar o elemento com id="lista", que não existe mais, resultando em um erro de referência ou de tipo ao tentar manipular um elemento nulo.