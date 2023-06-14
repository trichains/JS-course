function enviar() {
  var inicio = parseInt(document.querySelector("#inicio").value);
  var fim = parseInt(document.querySelector("#fim").value);
  var passo = parseInt(document.querySelector("#passo").value);
  var res = document.querySelector("#res");

  res.innerHTML = ""; // Limpar o conteúdo anterior do resultado

  if (inicio >= fim || isNaN(inicio) || isNaN(fim) || isNaN(passo) || passo === 0) {
    res.innerHTML = "Valores inválidos";
  } else {
    // Tratar o caso do passo igual a 0
    if (passo < 0) {
      passo = -passo; // Transforma o passo negativo em positivo
    } else if (passo === 0) {
      passo = 1; // Define um valor padrão para o passo (neste caso, 1)
    }

    for (var c = inicio; c <= fim; c += passo) {
      res.innerHTML += c + " ";
    }
  }
}
