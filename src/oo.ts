class Pessoa {
    nome: string;
    renda?: number;
    constructor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): string {
        return `${this.nome} disse oi`;
    }
}

class ContaBancaria {
    protected saldo: number;
    public numeroConta: number;

    constructor(numeroDaConta: number) {
        this.numeroConta = numeroDaConta;
        this.saldo = 0;
    }

    static retornaNumeroDoBanco(){
        return 125;
    }

    private getSaldo() {
        return this.saldo;
    }

    private setSaldo(valor: number) {
        this.saldo = valor;
    }

    depositar(valor:number) {
        this.saldo += valor;
    }
}

class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}

const contaDoPedro = new ContaBancariaPessoaFisica(123456)
// contaDoPedro
ContaBancaria.retornaNumeroDoBanco;