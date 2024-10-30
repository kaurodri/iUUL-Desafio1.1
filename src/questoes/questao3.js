import { Vertice, Poligono } from '../classes/index.js';
import promptSync from 'prompt-sync';

const entrada = promptSync({ sigint: true });

const criar = function (num) {
    const x = entrada(`[ ${num} Vértice ] coordenada x: `);
    const y = entrada(`[ ${num} Vértice ] coordenada y: `);
    return new Vertice(Number(x), Number(y));
};

const vertices = [];

console.log("Adicione os 3 primeiros vértices do polígono:");

vertices.push( criar('1º') );
vertices.push( criar('2º') );
vertices.push( criar('3º') );

const poligono = new Poligono(vertices);

while (true) {
    const adicionar = entrada("Adicionar outro vértice? [ s / n ]: ").toLowerCase();
    if (adicionar === 's') {
        const novoVertice = criar('Novo');

        let verificar = !poligono.addVertice(novoVertice) ? 'Este vértice já existe no polígono.' : 'Vértice adicionado com sucesso.';
        console.log(verificar);
    } else {
        break;
    }
}
    
let conteudo = '';
conteudo += `O polígono tem ${poligono.qtdVertices} vértices.\n`;
conteudo += `O perímetro do polígono é: ${poligono.perimetro.toFixed(2)}`;
console.log(conteudo);