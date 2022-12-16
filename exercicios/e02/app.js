console.log('e02-s03-m1');

const entradaNome = document.getElementById('nome');
const botaoAcao = document.getElementById('acao');
const pMensagem = document.getElementById('mensagem');

console.log(entradaNome, botaoAcao, pMensagem);

// Resolução:

const _mensagemOla = (nome) => {
  return `Olá, ${nome}!`;
};

// podemos omitir as chaves e return statement
const mensagemOla = nome => `Olá, ${nome}!`;

const resultado = mensagemOla("Mariana");
console.log(resultado);
// "Olá, Mariana!"
