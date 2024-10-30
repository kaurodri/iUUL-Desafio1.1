import Alunos from './Alunos.js';

class Turma {
    constructor() {
        this.alunos = [];
    }

    adicionarAluno(matricula, nomeAluno) {
        if (this.alunos.some(aluno => aluno.matricula === matricula)) {
            console.log("Erro: Matrícula já existente!");
            return false;
        }
        this.alunos.push(new Alunos(matricula, nomeAluno));
    }

    removerAluno(matricula) {
        this.alunos = this.alunos.filter(aluno => aluno.matricula !== matricula);
    }

    lancarNota(matricula, prova, nota) {
        const aluno = this.alunos.find(aluno => aluno.matricula === matricula);
        if (!aluno) {
            console.log("Erro: Aluno não encontrado!");
            return;
        }
        if (prova === 'P1') {
            aluno.p1 = nota;
        } else if (prova === 'P2') {
            aluno.p2 = nota;
        } else {
            console.log("Erro: Prova inválida! Use 'P1' ou 'P2'.");
        }
    }

    imprimirBoletim() {
        const colunas = `${`Matricula`.padEnd(10)} ${`Nome`.padEnd(20)} ${`P1`.padEnd(5)} ${`P2`.padEnd(5)} ${`NF`.padEnd(5)}`;
        const separator = `-`.padEnd(47, '-');

        console.log(`${separator}\n${colunas}\n${separator}`);
        
        //! ordena os alunos pelo nome antes de imprimir.
        this.alunos
            .sort((a, b) => a.nomeAluno.localeCompare(b.nomeAluno))
            .forEach(aluno => {
                const formatacao = [
                    aluno.matricula.toString().padEnd(10),
                    aluno.nomeAluno.padEnd(20),
                    aluno.P1().toString().padEnd(5),
                    aluno.P2().toString().padEnd(5),
                    aluno.NotaFinal().toString().padEnd(5)
                ]
                let [boletimMatricula, boletimAluno, boletimP1, boletimP2, boletimNF] = formatacao;

                console.log(`${boletimMatricula} ${boletimAluno} ${boletimP1} ${boletimP2} ${boletimNF}`);
            });
        
        console.log(separator);
    }
}

export default Turma;