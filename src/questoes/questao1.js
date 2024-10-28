import Vertice from '../classes/Vertice.js';
import promptSync from 'prompt-sync';

const entrada = promptSync({ sigint: true });

const criar = function () {
    const x = entrada('coordenada x: ');
    const y = entrada('coordenada y: ');
    return new Vertice(x, y);
};

const priVertice = criar();
const segVertice = criar();
const terVertice = criar();

let conteudo = '';
conteudo += `Distância 1 -> 2: ${ priVertice.distancia(segVertice) }\n`;
conteudo += `Distância 2 -> 3: ${ segVertice.distancia(terVertice) }\n`;
conteudo += `Distância 3 -> 1: ${ terVertice.distancia(priVertice) }\n`;
console.log(conteudo);

//mover
const novoX = entrada('Nova coordenada x para o primeiro vértice: ');
const novoY = entrada('Nova coordenada y para o primeiro vértice: ');
priVertice.move(novoX, novoY);
console.log(`O primeiro vértice foi movido para (${priVertice.x}, ${priVertice.y})\n`);

//verificar
let resultado = priVertice.equals(segVertice) ? 'é igual ao' : 'é diferente do';
console.log(`O primeiro vértice ${resultado} segundo vértice.`)