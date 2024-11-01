# Desafio #1.1 - Fundamentos do Javascript
**Formação Back-End - Node.js / Express**

Esse primeiro desafio é uma aplicação modular em JavaScript que envolve conceitos de geometria, manipulação de dados de alunos e validação de informações de clientes. 

Nas primeiras 3 questões, implementei a classe `Vertice`, que encapsula as coordenadas de um ponto no espaço bidimensional. A classe permite calcular a distância entre vértices, mover um vértice e verificar a igualdade entre dois vértices. Em seguida, a classe `Triangulo` utiliza instâncias de `Vertice` para representar triângulos, fornecendo métodos para calcular perímetro, área e tipo do triângulo, além de métodos de comparação e clonagem. A classe `Poligono` foi projetada para gerenciar uma coleção de vértices, permitindo calcular o perímetro e adicionar novos vértices, assegurando que não sejam duplicados.

O código da quarta questão inclui um sistema de gerenciamento de alunos com as classes `Alunos` e `Turma`. A classe `Alunos` representa cada estudante, armazenando informações como matrícula e notas. Ela possui métodos para calcular a nota final de acordo com a presença ou ausência das notas das provas. A classe `Turma` gerencia um conjunto de alunos, permitindo adicionar novos alunos, lançar notas e imprimir um boletim com as informações formatadas dos alunos.

E na quinta questão implementei um módulo para validação de dados do cliente, que utiliza a biblioteca `Luxon` para manipulação de datas. O sistema garante que as entradas do usuário sejam válidas, verificando nome, CPF, data de nascimento, renda mensal, estado civil e dependentes. Essas validações são feitas em um loop que continua solicitando dados até que informações válidas sejam fornecidas.

Em resumo, esse primeiro desafio é uma aplicação bem estruturada que combina geometria com gerenciamento de dados de estudantes e validação de informações de clientes, utilizando princípios de programação orientada a objetos para garantir que os dados sejam manipulados de maneira eficaz e com segurança. Cada parte do código foi projetada para ser modular e reutilizável, facilitando a manutenção e a extensibilidade do sistema.