// Função tradicional que calcula a área de um retângulo
function CalculaArea(base: number, altura: number): number {
    return base * altura; // Retorna o produto da base pela altura
}

// Função de seta (arrow function) que calcula a área de um retângulo
const calculaArea2 = (base: number, altura: number): number => base * altura; 
// Retorna o produto da base pela altura

// Função que recebe um número variável de argumentos (numeros) e não retorna nenhum valor
function somar(...numeros: number[]): void {
    // Aqui você pode adicionar a lógica para somar os números, por exemplo, usando reduce
    console.log(numeros); // Imprime o array de números no console
}

// Função que retorna uma string ou um número dependendo da condição
function teste(): string | number {
    if (10 > 5) { // Verifica se 10 é maior que 5
        return 'dez maior que 50'; // Retorna uma string se a condição for verdadeira
    } else {
        return 5; // Retorna um número se a condição for falsa
    }
}

// Chama a função teste e armazena o resultado na constante resultadoDeTeste
const resultadoDeTeste = teste(); 

// Comentários Explicativos:
// - A função CalculaArea recebe dois parâmetros (base e altura) e retorna a área de um retângulo.
// - A função calculaArea2 é uma versão de seta da função CalculaArea, realizando a mesma operação.
// - A função somar usa o operador rest (...) para receber um número variável de argumentos como um array e imprime esse array. Ela não retorna nenhum valor, por isso o tipo de retorno é void.
// - A função teste retorna um valor de tipo string ou number baseado em uma condição. Se 10 for maior que 5, retorna uma string; caso contrário, retorna um número.
// - A chamada const resultadoDeTeste = teste() executa a função teste e armazena seu resultado na variável resultadoDeTeste.
