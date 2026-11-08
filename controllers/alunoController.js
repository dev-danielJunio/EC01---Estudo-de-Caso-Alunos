import { Aluno } from '../models/aluno.js';

let listaAlunos = JSON.parse(localStorage.getItem('listaAlunos')) || [];

function cadastrarAluno() {
    const nomeAluno = document.getElementById('nome')
    const idadeAluno = document.getElementById('idade')
    const cursoAluno = document.getElementById('curso')
    const notaFinalAluno = document.getElementById('notaFinal')
    if (!nomeAluno.value || !idadeAluno.value || !cursoAluno.value || !notaFinalAluno.value) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const aluno = new Aluno(
        nomeAluno.value,
        idadeAluno.value,
        cursoAluno.value,
        notaFinalAluno.value
    )

    listaAlunos.push(aluno);
    localStorage.setItem('listaAlunos', JSON.stringify(listaAlunos));
    alert('Aluno cadastrado com sucesso!');

    listarAlunos();

    nomeAluno.value = '';
    idadeAluno.value = '';
    cursoAluno.value = '';
    notaFinalAluno.value = '';
}

function editarAluno(indice) {
    const aluno = listaAlunos[indice];

    const nome = prompt('Nome do aluno:', aluno.nome);
    if (nome === null) return;

    const idade = prompt('Idade do aluno:', aluno.idade);
    if (idade === null) return;

    const curso = prompt('Curso do aluno:', aluno.curso);
    if (curso === null) return;

    const notaFinal = prompt('Nota final do aluno:', aluno.notaFinal);
    if (notaFinal === null) return;

    if ([nome, idade, curso, notaFinal].some(valor => !valor.trim())) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    listaAlunos[indice] = new Aluno(
        nome.trim(),
        idade.trim(),
        curso.trim(),
        notaFinal.trim()
    );
    localStorage.setItem('listaAlunos', JSON.stringify(listaAlunos));
    listarAlunos();
}

function excluirAluno(indice) {
    if (!confirm(`Deseja excluir o aluno ${listaAlunos[indice].nome}?`)) return;

    listaAlunos.splice(indice, 1);
    localStorage.setItem('listaAlunos', JSON.stringify(listaAlunos));
    listarAlunos();
}

function listarAlunos() {
    const lista = document.getElementById('alunos-lista');
    if (!lista) return;
    listaAlunos = JSON.parse(localStorage.getItem('listaAlunos')) || [];
    lista.innerHTML = '';
    listaAlunos.forEach((aluno, indice) => {
        const row = document.createElement('tr');
        [aluno.nome, aluno.idade, aluno.curso, aluno.notaFinal].forEach(valor => {
            const coluna = document.createElement('td');
            coluna.textContent = valor;
            row.appendChild(coluna);
        });

        const acoes = document.createElement('td');

        const botaoEditar = document.createElement('button');
        botaoEditar.type = 'button';
        botaoEditar.className = 'btn btn-warning btn-sm me-2';
        botaoEditar.textContent = 'Editar';
        botaoEditar.addEventListener('click', () => editarAluno(indice));

        const botaoExcluir = document.createElement('button');
        botaoExcluir.type = 'button';
        botaoExcluir.className = 'btn btn-danger btn-sm';
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.addEventListener('click', () => excluirAluno(indice));

        acoes.appendChild(botaoEditar);
        acoes.appendChild(botaoExcluir);
        row.appendChild(acoes);
        lista.appendChild(row);
    });
}
window.cadastrarAluno = cadastrarAluno;
document.addEventListener('DOMContentLoaded', listarAlunos);
