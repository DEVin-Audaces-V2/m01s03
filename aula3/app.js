// Impede o uso de variáveis que não existem
// "use strict";
// Automaticamente presente em script do tipo módulo

// Escopo Global
var minhaVariavel = "ConteudoDaVariavel";

function funcaoExemplo() {
  // Escopo de Função
  var varEscopoFunc = "NoEscopoDaFuncao";
}

if (minhaVariavel) {
  // Escopo de Bloco
  var varEscopoBloco = "NoEscopoDoBloco";
}


// Exemplo de escopo de função
function definirLargura() {
  var largura = 100;
  largura = 999;
  console.log(largura);
}

definirLargura();

console.log(largura);
