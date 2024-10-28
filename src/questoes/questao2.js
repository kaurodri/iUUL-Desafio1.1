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
    console.log(`Criação do ${i}º Triângulo:`);

    const priVertice = criar('1');
    const segVertice = criar('2');
    const terVertice = criar('3');

    const triangulo = new Triangulo(priVertice, segVertice, terVertice);
    triangulos.push(triangulo);

    let conteudo = '';
    conteudo += `Tipo: ${triangulo.tipo()}\n`;
    conteudo += `Perímetro: ${triangulo.perimetro.toFixed(2)}\n`;
    conteudo += `Área: ${triangulo.area.toFixed(2)}\n`;
    console.log(conteudo);
}

let resultado;
//comparando primeiro e segundo triângulo:
resultado = triangulos[0].equals(triangulos[1]) ? 'iguais' : 'diferentes';
console.log(`O primeiro e segundo triângulo são ${resultado}.\n`)

//clonando o primeiro triângulo:
const trianguloClone = triangulos[0].clone();
let clone = '';
clone += `Primeiro triângulo clonado:\n`;
clone += `Tipo: ${trianguloClone.tipo()}\n`;
clone += `Perímetro: ${trianguloClone.perimetro.toFixed(2)}\n`;
clone += `Área: ${trianguloClone.area.toFixed(2)}`;
console.log(clone);

//3 triângulos usados de exemplo:
// 1(2, 2) 2(0, 0)  3(2, 2)
// 1(3, 0) 2(1, 2)  3(4, 2)
// 1(4, 2) 2(2, 0)  3(4, 4)