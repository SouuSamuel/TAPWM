document.getElementById("btn").onclick = function () {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);

  let res = document.getElementById("res");

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    res.innerHTML = "Digite números válidos";
    return;
  }

  if (a <= 0 || b <= 0 || c <= 0) {
    res.innerHTML = "Valores precisam ser positivos";
    return;
  }

  // regra do triângulo
  if (a < b + c && b < a + c && c < a + b) {

    if (a == b && b == c) {
      res.innerHTML = "Equilátero";
    } else if (a == b || a == c || b == c) {
      res.innerHTML = "Isósceles";
    } else {
      res.innerHTML = "Escaleno";
    }

  } else {
    res.innerHTML = "Não forma triângulo";
  }
};