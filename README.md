# DevTech Academy

Aplicação de cadastro, listagem, edição e exclusão de alunos com HTML e JavaScript.

## Exercício 3: Eventos, Funções Anônimas e Arrow Functions

- Os botões Cadastrar, Editar e Excluir usam `addEventListener('click', function () { ... })`, com funções anônimas nos eventos de clique.
- A edição usa `map()` com uma arrow function para atualizar o aluno selecionado.
- A exclusão usa `filter()` com uma arrow function para remover o aluno selecionado.
- A listagem usa `forEach()` com arrow functions para montar as linhas e colunas da tabela.
- O sistema exibe mensagens com `alert()` após cadastrar, editar e excluir um aluno. A exclusão mantém a confirmação com `confirm()`.

## Executar com Docker

Na pasta do projeto, execute:

```sh
docker compose up --build -d
```

Acesse [http://localhost:8080](http://localhost:8080).
