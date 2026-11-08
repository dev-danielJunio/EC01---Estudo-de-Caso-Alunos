# DevTech Academy

Aplicação de cadastro, listagem, edição e exclusão de alunos com HTML e JavaScript.

## Exercício 3: Eventos, Funções Anônimas e Arrow Functions

- Os botões Cadastrar, Editar e Excluir usam `addEventListener('click', function () { ... })`, com funções anônimas nos eventos de clique.
- A edição usa `map()` com uma arrow function para atualizar o aluno selecionado.
- A exclusão usa `filter()` com uma arrow function para remover o aluno selecionado.
- A listagem usa `forEach()` com arrow functions para montar as linhas e colunas da tabela.
- O sistema exibe mensagens com `alert()` após cadastrar, editar e excluir um aluno. A exclusão mantém a confirmação com `confirm()`.

## Exercício 4: Relatórios com métodos de array

A página `public/relatorios.html` mostra os relatórios calculados em `controllers/relatorioController.js`:

- `filter()` lista os alunos aprovados, com nota final maior ou igual a 7.
- `reduce()` calcula as médias das notas e das idades, convertendo os valores salvos em números.
- `map()` extrai os nomes e `sort()` os coloca em ordem alfabética em português.
- `reduce()` também conta a quantidade de alunos por curso.
- `forEach()` exibe os resultados nas listas e tabelas da página.

Os relatórios são calculados ao abrir a página, ao clicar em **Atualizar relatórios** e ao alterar os cadastros em outra aba. Quando não há alunos, a página mostra mensagens de lista vazia e não calcula médias.

## Executar com Docker

Na pasta do projeto, execute:

```sh
docker compose up --build -d
```

Acesse [http://localhost:8080](http://localhost:8080).
