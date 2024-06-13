class Conta {
    numeroDaConta: number;
    saldo: number = 0;

    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta;
    }
}

// Classe ContaSalario estende a classe Conta e adiciona o método depositar para adicionar saldo à conta.
class ContaSalario extends Conta {
    depositar(valor: number) {
        this.saldo += valor;
    }
}

// Interface ITransacional define os métodos necessários para realizar uma transferência entre contas.
interface ITransacional {
    transferir: (valor: number, destinatario: Conta) => boolean; // Método para transferir um valor para outra conta.
    taxaTransferencia: number; // Taxa aplicada às transferências.
}

// Interface IExemplo2 define uma propriedade CNPJ.
interface IExemplo2 {
    cnpj: number;
}

// Interface IExemplo3 estende a interface IExemplo2 e adiciona uma propriedade telefone.
interface IExemplo3 extends IExemplo2 {
    telefone: number;
}

// Classe ContaCorrente estende a classe Conta e implementa a interface ITransacional.
// Adiciona a funcionalidade de transferência entre contas, deduzindo a taxa de transferência definida.
class ContaCorrente extends Conta implements ITransacional {
    transferir (valor: number, destinatario: Conta) {
        destinatario.saldo += valor - this.taxaTransferencia;
        return true; // Retorna true para indicar que a transferência foi realizada com sucesso.
    };
    taxaTransferencia: number = 0; // Define a taxa de transferência padrão como 0.
}