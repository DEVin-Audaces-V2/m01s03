
// Exemplo inserção e remoção ao final do array
/*
const vetorExemplo = [];
vetorExemplo.push(1);
vetorExemplo.push('a');
vetorExemplo.push('ultimo');
const ultimo = vetorExemplo.pop();
console.log(vetorExemplo, ultimo);
*/

// FUNÇÕES

// Exemplo com matemática
// f(x, y) = x**2 + y
// f(2, 3) = 2**2 + 3

function f(x, y) {
  return x**2 + y;
}

function funcaoExemplo(x, y) {
  // Exemplo de verificação de parâmetros
  if (typeof x !== 'number' || typeof y !== 'number') {
    // caso algum dos parametros não forem numeros
    // interrompo a execução e retorno undefined
    return;
  }

  return x**2 + y;
}

const resultadoA = funcaoExemplo(2);
const resultadoB = funcaoExemplo(5, 8);

//console.log(resultadoA);
//console.log(resultadoB);

// Função sem parâmetros nem retorno
/*
function dahOi() {
  //...
  console.log("Oi!");
}
dahOi();
*/

// Exemplo com parâmetros e string
function olaNome(nome, idade) {
  return `Olá, ${nome}! Você tem ${idade} anos.`;
}
const texto = olaNome('Bolacha', 33);
// console.log(texto);

const exemplo = function (n) {
  console.log(`Sou uma função anônima ${n}!`);
};

exemplo(6666);
