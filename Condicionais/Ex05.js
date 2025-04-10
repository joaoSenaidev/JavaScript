var prompt = require('prompt-sync')();


let NotaResposta = Number(prompt("Digite a nota do aluno:"));

if (NotaResposta >= 5) {
    console.log("O aluno foi aprovado!!");
}else{
    console.log("Nota invalida");
}