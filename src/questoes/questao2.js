import { Vertice, Triangulo } from '../classes/index.js';
import promptSync from 'prompt-sync';

const entrada = promptSync({ sigint: true });

const criar = function (num) {
    const x = entrada(`[ ${num}º Vértice ] coordenada x: `);
    const y = entrada(`[ ${num}º Vértice ] coordenada y: `);
    return new Vertice(Number(x), Number(y));
};

const triangulos = [];

for (let i = 1; i <= 3; i++) {
    console.log(`\nCriação do ${i}º Triângulo:`);

    const priVertice = criar('1');
    const segVertice = criar('2');
    const terVertice = criar('3');

    const triangulo = new Triangulo(priVertice, segVertice, terVertice);
    triangulos.push(triangulo);

    let conteudo = '';
    conteudo += `Tipo: ${triangulo.tipo()}\n`;
    conteudo += `Perímetro: ${triangulo.perimetro.toFixed(2)}\n`;
    conteudo += `Área: ${triangulo.area.toFixed(2)}`;
    console.log(conteudo);
}

let resultado;
//comparando primeiro e segundo triângulo:
resultado = triangulos[0].equals(triangulos[1]) ? 'iguais' : 'diferentes';
console.log(`O primeiro e segundo triângulo são ${resultado}.\n`)

//clonando o primeiro triângulo:
const trianguloClone = triangulos[0].clone();
console.log(`O clone do primeiro triângulo tem o mesmo perímetro: ${trianguloClone.perimetro.toFixed(2)}`);