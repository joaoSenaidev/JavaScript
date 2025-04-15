// Crie um sistema que permita cadastrar nomes. Antes de adicionar,
// verifique se o nome já está na lista (ignore maiúsculas/minúsculas). Se
// não estiver, adicione o usuário.
var prompt = require('prompt-sync')();

let nomes = prompt("Digite o seu nome: ");
let listaNome = ['joao'];

if (listaNome.includes(nomes)) {
    console.log("Esse nome ja esta sendo utilizado ");
    
} else {
    listaNome.push(nomes)
    console.log("Esse nome foi cadastrado!!!!");
    
}







