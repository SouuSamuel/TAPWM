let dados = [];

// MOSTRAR CAMPO "OUTRO"
function verificarOutro() {
  let genero = document.getElementById("genero").value;
  document.getElementById("campoOutro").style.display =
    genero === "outro" ? "block" : "none";
}

// FORMULÁRIO
document.getElementById("formPesquisa").addEventListener("submit", function(e) {
  e.preventDefault();

  let idade = Number(document.getElementById("idade").value);
  let genero = document.getElementById("genero").value;
  let opiniao = Number(document.getElementById("opiniao").value);

  if (genero === "outro") {
    genero = document.getElementById("generoOutro").value || "outro";
  }

  dados.push({ idade, genero, opiniao });

  this.reset();
  verificarOutro();
});

// CALCULAR RESULTADOS
function mostrarResultados() {
  if (dados.length === 0) {
    document.getElementById("resultado").innerHTML = "Nenhum dado ainda.";
    return;
  }

  let somaIdade = 0;
  let maisVelho = dados[0].idade;
  let maisNovo = dados[0].idade;

  let pessimo = 0;
  let otimoBom = 0;

  let contagemGenero = {};

  dados.forEach(p => {
    somaIdade += p.idade;

    if (p.idade > maisVelho) maisVelho = p.idade;
    if (p.idade < maisNovo) maisNovo = p.idade;

    if (p.opiniao === 1) pessimo++;
    if (p.opiniao === 3 || p.opiniao === 4) otimoBom++;

    contagemGenero[p.genero] = (contagemGenero[p.genero] || 0) + 1;
  });

  let mediaIdade = somaIdade / dados.length;
  let porcentagemOtimoBom = (otimoBom / dados.length) * 100;

  let generosTexto = "";
  for (let g in contagemGenero) {
    generosTexto += `${g}: ${contagemGenero[g]} <br>`;
  }

  document.getElementById("resultado").innerHTML = `
    <b>Total de pessoas:</b> ${dados.length} <br><br>
    Média de idade: ${mediaIdade.toFixed(2)} <br>
    Mais velho: ${maisVelho} <br>
    Mais novo: ${maisNovo} <br><br>
    Péssimo: ${pessimo} <br>
    % Ótimo/Bom: ${porcentagemOtimoBom.toFixed(2)}% <br><br>
    <b>Gêneros:</b><br>
    ${generosTexto}
  `;
}

// TESTE COM 10 PESSOAS
function teste() {
  dados = [
    { idade: 20, genero: "masculino", opiniao: 4 },
    { idade: 22, genero: "feminino", opiniao: 3 },
    { idade: 19, genero: "nao_binario", opiniao: 2 },
    { idade: 30, genero: "genero_fluido", opiniao: 1 },
    { idade: 25, genero: "agenero", opiniao: 4 },
    { idade: 40, genero: "masculino", opiniao: 3 },
    { idade: 18, genero: "feminino", opiniao: 1 },
    { idade: 27, genero: "outro", opiniao: 2 },
    { idade: 35, genero: "nao_binario", opiniao: 4 },
    { idade: 50, genero: "feminino", opiniao: 3 }
  ];

  mostrarResultados();
}

// GERAR 45 ALEATÓRIOS
function gerarAleatorios() {
  dados = [];

  const generos = [
    "masculino",
    "feminino",
    "nao_binario",
    "agenero",
    "genero_fluido",
    "outro"
  ];

  for (let i = 0; i < 45; i++) {
    let idade = Math.floor(Math.random() * 60) + 12;
    let genero = generos[Math.floor(Math.random() * generos.length)];
    let opiniao = Math.floor(Math.random() * 4) + 1;

    dados.push({ idade, genero, opiniao });
  }

  mostrarResultados();
}