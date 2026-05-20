  // 1. Função construtora Retângulo
  function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;

    this.calcularArea = function () {
      return this.base * this.altura;
    };
  }

  let base = Number(prompt("Digite a base do retângulo:"));
  let altura = Number(prompt("Digite a altura do retângulo:"));

  let retangulo = new Retangulo(base, altura);

  alert("Área do retângulo: " + retangulo.calcularArea());


  // 2. Classe Conta
  class Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
      this.nomeCorrentista = nomeCorrentista;
      this.banco = banco;
      this.numeroConta = numeroConta;
      this.saldo = saldo;
    }

    get dados() {
      return `
Nome: ${this.nomeCorrentista}
Banco: ${this.banco}
Número da conta: ${this.numeroConta}
Saldo: R$ ${this.saldo}
`;
    }
  }

  class Corrente extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
      super(nomeCorrentista, banco, numeroConta, saldo);
      this.saldoEspecial = saldoEspecial;
    }

    get dados() {
      return `
Conta Corrente
Nome: ${this.nomeCorrentista}
Banco: ${this.banco}
Número da conta: ${this.numeroConta}
Saldo: R$ ${this.saldo}
Saldo especial: R$ ${this.saldoEspecial}
`;
    }
  }

  class Poupanca extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
      super(nomeCorrentista, banco, numeroConta, saldo);
      this.juros = juros;
      this.dataVencimento = dataVencimento;
    }

    get dados() {
      return `
Conta Poupança
Nome: ${this.nomeCorrentista}
Banco: ${this.banco}
Número da conta: ${this.numeroConta}
Saldo: R$ ${this.saldo}
Juros: ${this.juros}%
Data de vencimento: ${this.dataVencimento}
`;
    }
  }

  let nome1 = prompt("Digite o nome do correntista da Conta Corrente:");
  let banco1 = prompt("Digite o banco:");
  let numero1 = prompt("Digite o número da conta:");
  let saldo1 = Number(prompt("Digite o saldo:"));
  let saldoEspecial = Number(prompt("Digite o saldo especial:"));

  let contaCorrente = new Corrente(nome1, banco1, numero1, saldo1, saldoEspecial);

  let nome2 = prompt("Digite o nome do correntista da Conta Poupança:");
  let banco2 = prompt("Digite o banco:");
  let numero2 = prompt("Digite o número da conta:");
  let saldo2 = Number(prompt("Digite o saldo:"));
  let juros = Number(prompt("Digite a porcentagem de juros:"));
  let dataVencimento = prompt("Digite a data de vencimento:");

  let contaPoupanca = new Poupanca(nome2, banco2, numero2, saldo2, juros, dataVencimento);

  alert(contaCorrente.dados);
  alert(contaPoupanca.dados);
