var prompt = require('prompt-sync')();

let dia = Number(prompt("Digite um numero do dia da semana:"));

switch(dia){
    case 1:
        console.log("O dia escolhido foi: Domingo");
    break;
    case 2:
        console.log("O dia escolhido foi: Segunda-feira");
    break;
    case 3:
        console.log("O dia escolhido foi: Terça-feira");
    break;
    case 4:
        console.log("O dia escolhido foi: Quarta-feira");
    break;
    case 5:
        console.log("O dia escolhido foi: Quinta-feira");
    break;
    case 6:
        console.log("O dia escolhido foi: Sexta-feira");
    break;
    case 7:
        console.log("O dia escolhido foi: Sábado-feira");
    break;

    default:
        console.log("Dados invalidos!!!!!!");
}