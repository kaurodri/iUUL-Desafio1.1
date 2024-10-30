import { Turma } from '../classes/index.js';
import promptSync from 'prompt-sync';

const entrada = promptSync({ sigint: true });

const criar = function (num) {
    const matricula = entrada(`Matrícula do ${num} aluno: `);
    const nomeAluno = entrada(`Digite o nome do ${num} aluno: `);
    return [matricula, nomeAluno];
};

const turma = new Turma();

console.log("Adicione o primeiro aluno:");

const primeiroAluno = criar('1º');
turma.adicionarAluno(...primeiroAluno);

const quebrarTexto = () => console.log('');

while (true) {
    quebrarTexto();
    const adicionar = entrada("Adicionar outro aluno? [ s / n ]: ").toLowerCase();
    if (adicionar === 's') {
        const novoAluno = criar('novo');

        let verificar = (turma.adicionarAluno(...novoAluno) == false ) ? 'Esse número de matrícula já existe.' : 'Aluno adicionado com sucesso.';
        console.log(verificar);
    } else {
        break;
    }
}

while (true) {
    quebrarTexto();
    const lancarNota = entrada("Lançar nota? [ s / n ]: ").toLowerCase();
    if (lancarNota === 's') {
        const matricula = entrada("Digite a matrícula do aluno (ou sair para finalizar): ");
        if (matricula.toLowerCase() === 'sair') break;
    
        const prova = entrada("Qual prova? [ P1 / P2 / sair ] ").toUpperCase();
        if (prova.toLowerCase() === 'sair') break;

        const nota = parseFloat(entrada("Digite a nota: "));
        turma.lancarNota(matricula, prova, nota);
    } else {
        break;
    }
}

quebrarTexto();
turma.imprimirBoletim();