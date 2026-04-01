// script.js

const alunos = [];
const totalAlunos = 3;

for (let i = 1; i <= totalAlunos; i++) {
    let nome = "";
    let nota = 0;
    let valido = false;

    while (!valido) {
        nome = prompt(`Digite o nome do aluno ${i}:`).trim();
        nota = parseFloat(prompt(`Digite a nota de ${nome} (0 a 10):`));

        if (!nome) {
            alert("Nome inválido. Tente novamente.");
        } else if (isNaN(nota) || nota < 0 || nota > 10) {
            alert("Nota inválida. Digite um número entre 0 e 10.");
        } else {
            valido = true;
        }
    }

    alunos.push({ nome, nota });

    if (i < totalAlunos) {
        const continuar = confirm("Deseja continuar para o próximo aluno?");
        if (!continuar) break; // permite sair antes de chegar a 3 alunos
    }
}

const media = alunos.reduce((acc, a) => acc + a.nota, 0) / alunos.length;


let resultado = "Notas dos alunos:\n";
alunos.forEach(a => resultado += `${a.nome}: ${a.nota}\n`);
resultado += `Media geral: ${media.toFixed(2)}`;

alert(resultado);
console.log(resultado);