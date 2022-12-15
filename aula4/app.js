console.log("Aula 4");

// EXEMPLO REST

// function somaTudo(a, b, ...vetor) {
const somaTudo = (a, b, ...vetor) => {
  console.log({ a, b, vetor });
  let total = 0;

  for (let i = 0; i < vetor.length; i++) {
    total += vetor[i];
  }
  return total;
}
// Resultado é 18 pois 1 e 2 são destacados na linha 6
// const resultado = somaTudo(1, 2, 3, 4, 5, 6);
// console.log({ resultado });


// EXEMPLO SPREAD (PARAMETROS)
const vetorA = [1, 2, 3, 4];

function multiplicaTudo(a, b, c, d, e) {
  console.log({ a, b, c, d, e });
}
// multiplicaTudo(555,  ...vetorA, 999);

// EXEMPLO SPREAD (array)
const vetorB = [11, 22, ...vetorA, 33];

//console.log(vetorB);

// EXEMPLO concatenação de arrays com SPREAD
const vetorC = [...vetorB, ...vetorA];
//console.log(vetorC);


// EXEMPLO SPREAD (objeto)
const objA = { a: 1, b: 2, c: 3 };

const objB = { b: 44, ...objA, c: 55, d: 66 };

console.log(objB);