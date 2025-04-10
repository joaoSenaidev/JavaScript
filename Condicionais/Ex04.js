var prompt = require('prompt-sync')();

let senhaCorreta = 1234;
senha = Number(prompt("Entre com sua senha: ")); 
if (senhaCorreta == senha) {
    console.log("Acesso Liberado!!");
}else {
    console.log("Acesso Negado!!!!!");
}