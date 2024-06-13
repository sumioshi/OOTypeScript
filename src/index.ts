function multiply(...numbers: number[]): number {
    return numbers.reduce((acc, num) => acc * num, 1);
}

function greet(...names: string[]): string {
    return names.map(name => `Olá ${name}`).join(',');
}

const resultMultiplication = multiply(2,3,4); // 2 * 3 * 4 = 24
const greeting = greet('Maria', 'Joao', 'Ana') // Olá Maria, Olá joão, olá Ana.

console.log(resultMultiplication); //24
console.log(greeting); // Olá Maria, ola joao, ola ana.