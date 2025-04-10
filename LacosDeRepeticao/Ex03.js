//Verificar senha com tentativa até acertar(Use o While)

var prompt = require('prompt-sync')();

let senha = prompt("Digite a sua senha: ");
let resposta = prompt("Digite a sua senha novamente: ");

while(senha != resposta){
    resposta = prompt("Digite a sua senha novamente: ");
}

console.log("Senha verificada!!!");