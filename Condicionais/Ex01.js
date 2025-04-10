
var prompt = require('prompt-sync')();

let numero = Number(prompt("Digite qualquer numero:"));

if (numero > 0) {
    console.log("esse numero e positivo");

}else if(numero == 0){
    console.log("O seu numero e zero!!!!!")
}
 else if(numero < 0){
    console.log("esse numero e negativo");
}else{
    console.log("Essa informaçao é invalida!!");
}