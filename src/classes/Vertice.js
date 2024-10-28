class Vertice {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    get x() {
        return Number(this.#x);
    }

    get y() {
        return Number(this.#y);
    }

    distancia(coordenadaFinal) {
        const quadrado = int => (int**2);

        const xvetor = coordenadaFinal.x - this.x;
        const yvetor = coordenadaFinal.y - this.y;        

        return Math.sqrt( quadrado(xvetor) + quadrado(yvetor) );
    }

    move(novoX, novoY) {
        this.#x = Number(novoX);
        this.#y = Number(novoY);
    }

    equals(vertice) {
        let compararX = Number(vertice.x);
        let compararY = Number(vertice.y);

        return this.x === compararX && this.y === compararY;
    }
}

export default Vertice;