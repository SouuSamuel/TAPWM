// 1) Maior
function maior(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
}

// 2) Ordem crescente
function ordenar(a, b, c) {
  return [a, b, c].sort((x, y) => x - y);
}

// 3) Palíndromo
function palindromo(t) {
  t = t.toLowerCase().replace(/\s/g, "");
  return t === t.split("").reverse().join("");
}

// 4) Par ou ímpar
function parOuImpar(n) {
  return n % 2 === 0 ? "Par" : "Ímpar";
}

// 5) Média
function media(a, b, c) {
  return (a + b + c) / 3;
}


// função principal
function usar() {
  let a = Number(document.getElementById("n1").value);
  let b = Number(document.getElementById("n2").value);
  let c = Number(document.getElementById("n3").value);
  let texto = document.getElementById("texto").value;

  let res = document.getElementById("res");

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    res.innerHTML = "Digite números válidos!";
    return;
  }

  let resultado = "";

  resultado += "Maior: " + maior(a, b, c) + "<br>";
  resultado += "Ordem: " + ordenar(a, b, c) + "<br>";
  resultado += "Média: " + media(a, b, c) + "<br>";
  resultado += "Par/Ímpar (A): " + parOuImpar(a) + "<br>";

  if (texto !== "") {
    resultado += "Palíndromo: " + (palindromo(texto) ? "Sim" : "Não");
  }

  res.innerHTML = resultado;
}