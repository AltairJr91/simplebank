class Cliente {
    constructor(nome , conta , agencia, saldo){
    this.nome = nome;
    this.conta = conta;
    this.agencia = agencia;
    this.saldo = saldo;
    }
    sacar(valor){
        if (this.saldo >= valor){
        this.saldo -= valor;}
    }
    depositar(valor){
        if(valor >0){
        this.saldo += valor;
        }

    }

}

const cliente01 = new Cliente ('usuario', 1001472 , 1001,);
cliente01.saldo = 500
console.log(cliente01);
cliente01.sacar(300);
console.log(cliente01.saldo);
cliente01.depositar(100)
console.log(cliente01.saldo);