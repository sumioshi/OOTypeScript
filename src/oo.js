"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome} disse oi`;
    }
}
class ContaBancaria {
    constructor(numeroDaConta) {
        this.numeroConta = numeroDaConta;
        this.saldo = 0;
    }
    static retornaNumeroDoBanco() {
        return 125;
    }
    getSaldo() {
        return this.saldo;
    }
    setSaldo(valor) {
        this.saldo = valor;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
const contaDoPedro = new ContaBancariaPessoaFisica(123456);
// contaDoPedro
ContaBancaria.retornaNumeroDoBanco;
