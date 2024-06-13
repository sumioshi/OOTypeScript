"use strict";
// Declaração de um array de objetos do tipo 'aluno'
const alunos = [
    {
        nome: "Carlos", // Nome do aluno
        cursos: ["Front-End", "UX/UI"], // Array de cursos que o aluno está fazendo
        idade: 27, // Idade do aluno
    },
    {
        nome: "Ana", // Nome do aluno
        cursos: ["Front-end", "Python"], // Array de cursos que o aluno está fazendo
        idade: 23, // Idade do aluno
    },
];
// Adiciona um novo aluno ao array 'alunos' usando o método 'push'
alunos.push({
    nome: "Julia", // Nome do novo aluno
    cursos: ["Arquitetura"], // Cursos do novo aluno
    idade: 29, // Idade do novo aluno
});
// Declaração de um novo objeto 'aluno' conforme o tipo definido
const novoAluno = {
    nome: "Lucas", // Nome do aluno
    idade: 32, // Idade do aluno
    // O campo 'cursos' é opcional e não foi fornecido aqui
};
// Função que exibe o nome de um aluno
function exibeAluno(aluno) {
    console.log(aluno.nome); // Imprime o nome do aluno no console
}
// Comentários Explicativos sobre o Intuito:
// - O tipo 'aluno' define a estrutura de dados para representar alunos, garantindo consistência e tipo seguro.
// - O array 'alunos' armazena múltiplos objetos do tipo 'aluno', facilitando a manipulação de listas de alunos.
// - O uso do método 'push' permite adicionar novos alunos ao array de maneira simples e clara.
// - A criação do objeto 'novoAluno' demonstra a flexibilidade do tipo 'aluno', onde o campo 'cursos' é opcional.
// - A função 'exibeAluno' exemplifica como manipular e acessar os dados dos alunos, neste caso, apenas exibindo o nome do aluno no console.
// - Esse formato de código é útil para aplicações que lidam com listas de entidades, como alunos, produtos, ou qualquer outra coleção de objetos com propriedades definidas. O uso de tipos e arrays facilita a manutenção, escalabilidade e legibilidade do código.
