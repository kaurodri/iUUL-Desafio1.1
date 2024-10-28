class Poligono {
    #vertices;

    constructor(vertices) {
        if (vertices.length < 3) {
            throw new Error("O poligono precisa de pelo menos 3 vértices.");
        }
        this.#vertices = vertices;
    }

    get perimetro() {
        let perimetro = 0;
        for (let i = 0; i < this.#vertices.length; i++) {
            const verticeAtual = this.#vertices[i];
            const proximoVertice = this.#vertices[(i + 1) % this.#vertices.length];
            perimetro += verticeAtual.distancia(proximoVertice);
        }
        return perimetro;
    }

    get qtdVertices() {
        return this.#vertices.length;
    }

    addVertice(v) {
        for (let vertice of this.#vertices) {
            if (vertice.equals(v)) {
                return false;
            }
        }
        this.#vertices.push(v);
        return true;
    }
}

export default Poligono;