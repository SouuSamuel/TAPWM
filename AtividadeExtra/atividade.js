const pessoa1 = {
    nome: "João",
    idade: 20,
    hobby: "tocar violao",
    apresentar() {
        return `ola meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
    }
};

const pessoa2 = new Object();
pessoa2.nome = "Maria";
pessoa2.idade = 25;
pessoa2.hobby = "nadar";
pessoa2.apresentar = function() {
    return `ola meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
};

function Pessoa3(nome, idade, hobby) {
    this.nome = nome;
    this.idade = idade;
    this.hobby = hobby;
}
Pessoa3.prototype.apresentar = function() {
    return `ola meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
};
const pessoa3 = new Pessoa3("Carlos", 40, "cozinhar");

class Pessoa4 {
    constructor(nome, idade, hobby) {
        this.nome = nome;
        this.idade = idade;
        this.hobby = hobby;
    }

    apresentar() {
        return `ola meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
    }
}
const pessoa4 = new Pessoa4("Ana", 22, "ler");

const pessoaProto = {
    apresentar() {
        return `ola meu nome é ${this.nome}, tenho ${this.idade} anos e meu hobby é ${this.hobby}`;
    }
};
const pessoa5 = Object.create(pessoaProto);
pessoa5.nome = "Pedro";
pessoa5.idade = 28;
pessoa5.hobby = "andar de bike";

function apresentar(pessoa) {
    return pessoa.apresentar();
}

console.log(apresentar(pessoa1));
console.log(apresentar(pessoa2));
console.log(apresentar(pessoa3));
console.log(apresentar(pessoa4));
console.log(apresentar(pessoa5));