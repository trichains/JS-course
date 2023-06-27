// Função que recebe um valor e armazena em "n"
function par_impar(n) {
  if (n % 2 == 0) {  // Se o resto da divisão do valor de "n" por 2 for igual a 0
    return 'PAR!'
  } else { // Se o resto da divisão do valor de "n" por 2 for igual a 1
    return 'ÍMPAR!'
  }
}

// Cria uma variável chamada "resultado" que recebe o valor digitado
let resultado = par_impar(10)

// Exibe o resultado
console.log(`O valor é ${resultado}`)