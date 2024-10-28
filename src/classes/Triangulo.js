import Vertice from './Vertice.js';

class Triangulo {
    #v1;
    #v2;
    #v3;

    constructor(v1, v2, v3) {
        if (!(v1 instanceof Vertice) || !(v2 instanceof Vertice) || !(v3 instanceof Vertice)) {
            throw new Error("Os vértices fornecidos devem ser instâncias da classe Vertice.");
        }
        
        const ladoA = v1.distancia(v2);
        const ladoB = v2.distancia(v3);
        const ladoC = v3.distancia(v1);

        //verifica a condição de existência do triângulo (a + b > c para todos os lados).
        if ((ladoA + ladoB <= ladoC) || (ladoA + ladoC <= ladoB) || (ladoB + ladoC <= ladoA)) {
            throw new Error("Os vértices fornecidos não formam um triângulo.");
        }

        this.#v1 = v1;
        this.#v2 = v2;
        this.#v3 = v3;
    }

    get v1() { return this.#v1; }
    get v2() { return this.#v2; }
    get v3() { return this.#v3; }

    equals(outroTriangulo) {
        if (!(outroTriangulo instanceof Triangulo)) return false;

        const A = [this.#v1, this.#v2, this.#v3];
        const B = [outroTriangulo.v1, outroTriangulo.v2, outroTriangulo.v3];

        function Comparar(arrayA, arrayB) {

            const contagemA = {};
            const contagemB = {};
        
            function Contagem(array, contagem) {
                for (const elemento of array) {
                    contagem[elemento] = (contagem[elemento] || 0) + 1;
                }
            }
        
            Contagem(arrayA, contagemA);
            Contagem(arrayB, contagemB);
        
            const arrayBase = Object.keys(contagemA);
        
            for (const elemento of arrayBase) {
                if (contagemA[elemento] !== contagemB[elemento]) {
                    return false;
                }
            }
        
            return true;
        }
        return Comparar(A, B);
    }

    get perimetro() {
        let ladoA = this.#v1.distancia(this.#v2);
        let ladoB = this.#v2.distancia(this.#v3);
        let ladoC = this.#v3.distancia(this.#v1);

        return ladoA + ladoB + ladoC;
    }

    get area() {
        const a = this.#v1.distancia(this.#v2);
        const b = this.#v2.distancia(this.#v3);
        const c = this.#v3.distancia(this.#v1);
        const s = this.perimetro / 2;

        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }

    tipo() {
        const a = this.#v1.distancia(this.#v2);
        const b = this.#v2.distancia(this.#v3);
        const c = this.#v3.distancia(this.#v1);

        if (a === b && b === c) return "Equilátero";
        else if (a === b || b === c || a === c) return "Isósceles";
        else return "Escaleno";
    }

    clone() {
        return new Triangulo(this.#v1, this.#v2, this.#v3);
    }
}

export default Triangulo;