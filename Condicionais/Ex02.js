//b. Verificar se o usuário pode tirar carteira de motorista

//Qual e a sua idade??
//Se voce e maior de idade, entao, pode tirar a carteira de motorista
//Senao voce nao pode tirar a carteira de motorista

//pessoas maiores deidade (>=18)
var prompt = require('prompt-sync')();

let idade = Number(prompt("Opa, Digite a sua idade:"));

if (idade >= 18) {
    console.log("Voce podera tirar a sua carteira de motorista");
} else if(idade < 18){
    console.log("Voce nao podera tirar a sua carteira de motorista!!!!!");
}else{
    console.log("Essa informaçao é invalida!!");
}

