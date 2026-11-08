import { Aluno } from '../models/Aluno.js';

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

function listarAlunos() {
    const lista = document.getElementById('alunos-lista');
    if (!lista) return;
    listaAlunos = JSON.parse(localStorage.getItem('listaAlunos')) || [];
    lista.innerHTML = '';
    listaAlunos.forEach(aluno => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${aluno.nome}</td>
            <td>${aluno.idade}</td>
            <td>${aluno.curso}</td>
            <td>${aluno.notaFinal}</td>
        `;
        lista.appendChild(row);
    });
}
window.cadastrarAluno = cadastrarAluno;
document.addEventListener('DOMContentLoaded', listarAlunos);