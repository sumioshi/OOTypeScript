"use strict";
class Conta {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.numeroDaConta = numeroDaConta;
    }
}
// Classe ContaSalario estende a classe Conta e adiciona o método depositar para adicionar saldo à conta.
class ContaSalario extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
}
// Classe ContaCorrente estende a classe Conta e implementa a interface ITransacional.
// Adiciona a funcionalidade de transferência entre contas, deduzindo a taxa de transferência definida.
class ContaCorrente extends Conta {
    constructor() {
        super(...arguments);
        this.taxaTransferencia = 0; // Define a taxa de transferência padrão como 0.
    }
    transferir(valor, destinatario) {
        destinatario.saldo += valor - this.taxaTransferencia;
        return true; // Retorna true para indicar que a transferência foi realizada com sucesso.
    }
    ;
}
