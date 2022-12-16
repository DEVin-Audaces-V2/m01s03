console.log('e06-s03-m1');

// Resolução:


function verificaPalindromo(texto) {
  // ana, radar, osso
  const meio = texto.length / 2;
  const fim = texto.length - 1;

  for (let i = 0; i < meio; i++) {
    if (texto[i] !== texto[fim - i]) {
      return false;
    }
  }

  return true;
}

const teste0 = verificaPalindromo("osso");
console.log(teste0);
// true

const teste1 = verificaPalindromo("ana");
console.log(teste1);
// true

const teste2 = verificaPalindromo("julia");
console.log(teste2);
// false
