function gerarTabuada() {
  var numeroInput = document.querySelector("#numeroInput").value;
  var tabuadaList = document.querySelector("#tabuadaList");
  var numero = parseInt(numeroInput);

  // Limpa a lista
  tabuadaList.innerHTML = '';

  // Verifica se o valor digitado é um número válido
  if (isNaN(numero)) {
    var listItem = document.createElement('li');
    listItem.textContent = 'Digite um número válido.';
    tabuadaList.appendChild(listItem);
    return;
  }

  // Gera os itens da tabuada
  for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    var listItem = document.createElement('li');
    listItem.textContent = numero + ' x ' + i + ' = ' + resultado;
    tabuadaList.appendChild(listItem);
  }
}

var numeroInput = document.querySelector("#numeroInput");

numeroInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    gerarTabuada();
  }
});
