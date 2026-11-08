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

    const aluno = {
        nome: nomeAluno.value,
        idade: idadeAluno.value,
        curso: cursoAluno.value,
        notaFinal: notaFinalAluno.value
    }
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

document.addEventListener('DOMContentLoaded', listarAlunos);