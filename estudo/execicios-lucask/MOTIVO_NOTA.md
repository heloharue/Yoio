# Motivo da nota: Lucas

Lucas, tua nota ficou **3,20 de 4,00** no primeiro momento. Ainda tem a avaliação prática, que vale 1 ponto, então a nota final do momento sai depois dela.

| Parte | Nota |
|---|---|
| Aulas 01 a 05 | 1,40 de 2,00 |
| Atividade da Aula 05 | 0,80 de 1,00 |
| Caderno | 1,00 de 1,00 |

Cada aula vale 0,40; aula incompleta ou que não abre vale 0,20; sem entrega vale 0,00. Não houve desconto por cópia.

## Aula 01: JavaScript moderno (0,20 de 0,40)

Arquivo: `estudo/execicios-lucask/aula01/exec.txt`

Quatro dos 12 itens estão errados, e por isso a aula ficou incompleta.

1. No item 1 tu escreveste o resultado pronto, `const num = [2, 4, 6, 8]`. Era `nums.map(n => n * 2)`.
2. No item 2, `const pares = nums.map(x => 0 === 2);` usa map e uma comparação que nunca muda. Era `nums.filter(n => n % 2 === 0)`.
3. No item 4, `const { titulo, preco } = produto ;` usa `produto`, que não existe. Era `= p`.
4. No item 5, `const ehcaro = produtos.filter((p) => p.valor >= 100,00);` não é função de seta que recebe um número, o nome está com `c` minúsculo e a vírgula decimal quebra o código. Era `const ehCaro = n => n > 100;`.

Os itens 3, 6, 7, 8, 9, 10, 11 e 12 estão corretos. Para fechar: refazer 1, 2, 4 e 5.

## Aula 02: Promise e async/await (0,40 de 0,40)

Arquivo: `estudo/execicios-lucask/aula02/aula02/estudos/promises-async-lucask.js`

As perguntas 1 a 4, 6, 8, 9 e 10 estão respondidas e corretas, e a 10 ainda cita `Promise.all()`. A 5 (por que `await` fora de `async` dá erro) ficou imprecisa: "vai parar o fluxo principal". O motivo é que `await` só é permitido dentro de função `async`. Na 7 a ideia está certa, mas escreveste "marcada como wait", e o certo é `await` sem a função ser `async`. Nenhuma das duas custou nota.

## Aula 03: lista em JavaScript puro (0,20 de 0,40)

Arquivo: `estudo/execicios-lucask/aula03/estudos/aula03-lucask/text.html`

O HTML com contador, campo e botão Adicionar está presente, mas o código da lista (`desenhar()` e o clique do botão) está inteiro dentro de um comentário `/* ... */`, então nada funciona. No fim do arquivo há ainda um bloco com `useState` e JSX solto num `<script>` comum, que dá erro de sintaxe, e não encontrei os experimentos 1 a 4 nem o registro de 3 linhas. Tudo isso entrou no mesmo desconto de 0,20. Para fechar: tirar o comentário em volta do JavaScript puro, apagar o bloco de React e responder os 4 experimentos.

## Aula 04: React por CDN (0,20 de 0,40)

Arquivo: `estudo/execicios-lucask/aula04/index.html`

A página abre e mostra só o `App` com "Olá, React". O Cabecalho, o Cartao (usado três vezes), a Lista com map e key e um segundo `App` estão escritos depois do `</html>`, fora do `<script type="text/babel">`, então aparecem como texto na página e não executam. Isso custou 0,20. Para fechar: mover essas funções para dentro do `<script type="text/babel">`, trocar o `App` de "Olá, React" pelo segundo `App` e usar `<Lista />` nele.

## Aula 05: chaves, ternário e className (0,40 de 0,40)

Arquivo: `estudo/execicios-lucask/aula05/jsx.js` (12/11, 07:54)

O conteúdo tem `{projeto}` no Cabecalho, o ternário `t.feita ? "(feita)" : "(pendente)"`, `className="cartao destaque"` e a Lista com map e key. O arquivo é uma página HTML salva com extensão `.js`, então o navegador não abre como página, mas isso não custou nota. Para ficar certo: renomear `jsx.js` para `index.html`.

## Atividade da Aula 05: tela do grupo em componentes (0,80 de 1,00)

Arquivo: `estudo/execicios-lucask/aula05/index.html` (commit teu, 30/10, 14:07)

O `CardAtividade` recebe `titulo`, `tempo`, `onEditar` e `onExcluir`, a página abre e funciona com os três scripts do React no lugar, e o commit é teu. Faltaram o `// MEU COMPONENTE` e o registro de 3 linhas, que juntos custaram 0,20. Para fechar: colocar `// MEU COMPONENTE` em cima do `CardAtividade` e escrever as 3 linhas.

## Caderno (1,00 de 1,00)

Entregue completo.
