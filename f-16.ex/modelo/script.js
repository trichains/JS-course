let lista = document.querySelector("#lista"); // Seleciona o elemento com o ID "lista"
let res = document.querySelector("#res"); // Seleciona o elemento com o ID "res"
let valores = []; // Array vazio para armazenar os valores adicionados

function isNumber(n) {
  // Função para verificar se um valor é um número entre 1 e 100
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true; // Retorna true se o valor for válido
  } else {
    return false; // Retorna false se o valor for inválido
  }
}

function inLista(n, l) {
  // Função para verificar se um valor já está presente na lista de valores
  if (l.indexOf(Number(n)) != -1) {
    return true; // Retorna true se o valor estiver na lista
  } else {
    return false; // Retorna false se o valor não estiver na lista
  }
}

function adicionar_a_lista() {
  let valor_digitado = document.querySelector("#valor_digitado"); // Seleciona o campo de entrada
  let valor = valor_digitado.value; // Obtém o valor digitado pelo usuário

  if (isNumber(Number(valor)) && !inLista(valor, valores)) {
    // Verifica se o valor é válido e não está na lista
    valores.push(Number(valor)); // Adiciona o valor na lista de valores

    let item = document.createElement('option'); // Cria um elemento <option>
    item.text = `Valor ${valor} adicionado.`; // Define o texto do elemento <option>
    lista.appendChild(item); // Adiciona o elemento <option> à lista

    res.innerHTML = ''; // Limpa o conteúdo do elemento com ID "res"

  } else {
    window.alert("Valor inválido ou já encontrado na lista."); // Exibe um alerta informando que o valor é inválido ou já está na lista
  }

  valor_digitado.value = ''; // Limpa o campo de entrada
  valor_digitado.focus(); // Define o foco de volta ao campo de entrada
}

function finalizar() {
  if (valores.length == 0) {
    // Verifica se não há valores na lista
    window.alert('Adicione valores antes de finalizar!'); // Exibe um alerta informando que é necessário adicionar valores antes de finalizar
  } else {
    let tot = valores.length; // Obtém o total de valores na lista
    let maior = valores[0]; // Inicializa a variável "maior" com o primeiro valor da lista
    let menor = valores[0]; // Inicializa a variável "menor" com o primeiro valor da lista
    let soma = 0; // Variável para armazenar a soma dos valores
    let media = 0; // Variável para armazenar a média dos valores

    for (let pos in valores) {
      // Percorre todos os valores da lista
      soma += valores[pos]; // Incrementa a soma com o valor atual

      if (valores[pos] > maior)
        maior = valores[pos]; // Atualiza o maior valor, se necessário

      if (valores[pos] < menor)
        menor = valores[pos]; // Atualiza o menor valor, se necessário
    }

    media = soma / tot; // Calcula a média dos valores

    res.innerHTML = ''; // Limpa o conteúdo do elemento com ID "res"
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`; // Exibe o total de valores cadastrados
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`; // Exibe o menor valor informado
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`; // Exibe o maior valor informado
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`; // Exibe a soma de todos os valores
    res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`; // Exibe a média dos valores digitados
  }
}
