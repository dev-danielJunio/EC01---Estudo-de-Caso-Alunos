const calcularMedia = (alunos, campo) => {
    if (alunos.length === 0) return '—';

    const soma = alunos.reduce((total, aluno) => total + Number(aluno[campo]), 0);

    return (soma / alunos.length).toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
};

function adicionarLinha(tabela, valores, colunas = 1) {
    const linha = document.createElement('tr');

    valores.forEach(valor => {
        const coluna = document.createElement('td');
        coluna.textContent = valor;
        coluna.colSpan = colunas;
        linha.appendChild(coluna);
    });

    tabela.appendChild(linha);
}

function atualizarRelatorios() {
    const alunos = JSON.parse(localStorage.getItem('listaAlunos')) || [];

    document.getElementById('relatorios-vazio').hidden = alunos.length > 0;
    document.getElementById('media-notas').textContent = calcularMedia(alunos, 'notaFinal');
    document.getElementById('media-idades').textContent = calcularMedia(alunos, 'idade');

    // filter seleciona os alunos que atingiram a média de aprovação.
    const aprovados = alunos.filter(aluno => Number(aluno.notaFinal) >= 7);
    const listaAprovados = document.getElementById('aprovados-lista');
    listaAprovados.innerHTML = '';

    if (aprovados.length === 0) {
        adicionarLinha(listaAprovados, ['Nenhum aluno aprovado.'], 4);
    }

    aprovados.forEach(aluno => {
        adicionarLinha(listaAprovados, [aluno.nome, aluno.idade, aluno.curso, aluno.notaFinal]);
    });

    // map cria uma lista de nomes; sort ordena essa nova lista sem alterar os alunos.
    const nomesOrdenados = alunos
        .map(aluno => aluno.nome)
        .sort((nomeA, nomeB) => nomeA.localeCompare(nomeB, 'pt-BR', { sensitivity: 'base' }));
    const listaNomes = document.getElementById('nomes-lista');
    listaNomes.innerHTML = '';

    const nomesParaExibir = nomesOrdenados.length > 0 ? nomesOrdenados : ['Nenhum aluno cadastrado.'];
    nomesParaExibir.forEach(nome => {
        const item = document.createElement('li');
        item.className = 'list-group-item';
        item.textContent = nome;
        listaNomes.appendChild(item);
    });

    // reduce acumula a quantidade de alunos de cada curso.
    const quantidadePorCurso = alunos.reduce((cursos, aluno) => {
        cursos[aluno.curso] = (cursos[aluno.curso] || 0) + 1;
        return cursos;
    }, Object.create(null));
    const cursosOrdenados = Object.entries(quantidadePorCurso)
        .sort(([cursoA], [cursoB]) => cursoA.localeCompare(cursoB, 'pt-BR', { sensitivity: 'base' }));
    const listaCursos = document.getElementById('cursos-lista');
    listaCursos.innerHTML = '';

    if (cursosOrdenados.length === 0) {
        adicionarLinha(listaCursos, ['Nenhum aluno cadastrado.'], 2);
    }

    cursosOrdenados.forEach(([curso, quantidade]) => {
        adicionarLinha(listaCursos, [curso, quantidade]);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('atualizar-relatorios').addEventListener('click', function () {
        atualizarRelatorios();
    });

    atualizarRelatorios();
});

// Atualiza a página se os cadastros forem alterados em outra aba.
window.addEventListener('storage', function (evento) {
    if (evento.key === 'listaAlunos' || evento.key === null) {
        atualizarRelatorios();
    }
});
