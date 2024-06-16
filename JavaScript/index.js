const prompt = require ('readline-sync')

let idade = prompt.question("Qual a sua idade? ")


// Coerção explicita ou conversão manual
let idadeEmNumero = Number(idade)

console.log(idadeEmNumero, typeof idadeEmNumero);

console.log(Number("x")); //NaN = Not a Number

console.log(String(10), typeof String(10));

console.log(Boolean(0)); // apenas 0 é False em booleano
