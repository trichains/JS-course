const idade = 13;
const resultado = idade < 16 ? 'Não vota!' : (idade < 18 || idade > 65) ? 'Voto opcional' : 'Voto obrigatório!';
console.log(resultado);
