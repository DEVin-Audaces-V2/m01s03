
//const titulo = document.getElementById("titulo");
// console.log('Olá, dev!', titulo);

// Exemplo de Ternário
/*
const ehVerdade = 'sdaf';

if (ehVerdade) {
  console.log('VERDADEIRO!');
} else {
  console.log('FALSO!');
}

ehVerdade ? console.log('VERDADEIRO!') : console.log('FALSO!');
const resultado = 2 + 2 === 4 ? "SIM" : "NAO";
console.log(resultado);
*/

// Exemplo de Switch
/*
const numero = 2;

if (numero === 0) {
  console.log('ZERO');
} else if (numero === 1) {
  console.log('UM');
} else if (numero === 2) {
  console.log('DOIS');
} else {
  console.log('OUTRO');
}

switch (numero) {
  case 0:
    console.log('ZERO');
    break;
  case 1:
    console.log('UM');
    break;
  case 2:
    console.log('DOIS');
    break;
  default:
    console.log('OUTRO');
}
*/

// Exemplo de uso de || / ??
/*
const numA = 0;
const numB = numA || "AAAAAA";
const numC = numA ?? "AAAAAA";
console.log(numB, numC);
*/

// Exemplo de uso de &&
/*
const numD = 1;
const numE = numD && "BBBBBB";
console.log(numE);

const imprimeNaTela = true;

if (imprimeNaTela) {
  console.log("Imprimiu!");
}

imprimeNaTela && console.log("Imprimiu!");
*/


// ARRAYS (vetores)

// Criando array vazio
const vetorA = [];

// Verificando se uma variável é array
const ehArray = Array.isArray(vetorA);
//console.log(ehArray);

// É possível inicializar com valores pré definidos
const vetorB = [2, 4, "asd", null, NaN];

// É possível acrescentar valores após definição
vetorB.push(234);
vetorB.push("CCCCCCCC");
// substituindo um valor
vetorB[1] = 444;

// Acessando um item
//console.log(vetorB[2]);
// Acessando item fora do array
//console.log(vetorB[111]);

// Como saber o tamanho do array
//console.log(vetorB.length);

// Asseccando ultimo item do array
//console.log(vetorB[vetorB.length - 1]);
//console.log(vetorB.at(-1));


// OBJECTS (objetos)

// Criando um objeto vazio
const objetoA = {};
// Criando objeto com chaves/valores predefinidos
const objetoB = { nome: 'Romeu', idade: 30 };
// Acrescentando chave/valor após definição
objetoB.ocupacao = 'Programador';
// Alterando o valor de uma chave já existente
objetoB.nome = 'Isaac';

// "Congelando" um objeto
Object.freeze(objetoB);
objetoB.nome = 'BBBBBBBBBBBBBBBBB';

// Criando um objeto já "congelando"
const objetoC = Object.freeze({ nome: "Teste" });

console.log(objetoB);

// EXEMPLOS DE ARRAYS E OBJETOS MISTURADOS

let numero = [6];

const obj = { n: numero };

numero[0] = 8;

console.log({ obj, numero });
