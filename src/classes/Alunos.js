class Alunos {

    constructor(matricula, nomeAluno) {
        this.matricula = matricula;
        this.nomeAluno = nomeAluno;
        this.p1 = null;
        this.p2 = null;
    }

    calcular() {
        const condicao = {
            caso1: () => this.p1 === null && this.p2 === null,
            caso2: () => this.p1 === null,
            caso3: () => this.p2 === null
        };
        
        const retorno = {
            'caso1': 0.0,
            'caso2': this.p2 / 2,
            'caso3': this.p1 / 2,
            'caso0': (this.p1 + this.p2) / 2
        };

        if (condicao.caso1()) {
            return retorno['caso1'];
        } else if (condicao.caso2()) {
            return retorno['caso2'];
        } else if (condicao.caso3()) {
            return retorno['caso3'];
        } else {
            return retorno['caso0'];
        }
    }

    // !formatação.
    P1() {
        return this.p1 !== null ? this.p1.toFixed(1) : '-';
    }

    P2() {
        return this.p2 !== null ? this.p2.toFixed(1) : '-';
    }

    NotaFinal() {
        return this.calcular().toFixed(1);
    }
}

export default Alunos;