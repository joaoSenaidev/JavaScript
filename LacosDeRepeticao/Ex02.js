var prompt = require('prompt-sync')();

let soma = 0;
let num = Number(prompt("Digite um numero"));

while(num !== 0){
    soma +=  num;
    num = Number(prompt("Digite o segundo numero(Caso queira encerrar digite o numero 0.)"));
}
console.log(soma);