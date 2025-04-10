var prompt = require('prompt-sync')();

let idade = 0;

do {
   idade = prompt("Informe alguma idade:");
} while (idade <= 0);
console.log("Idade valida!!!!");