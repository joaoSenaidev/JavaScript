//.length() => tamanho

// let frutas = ["Maca", "Abacate", "Roma", "Abacaxi", "Banana", "uva", "Maca verde", "Jaca"]; 
// console.log(frutas.length);

//----------------------------------------------------------------------------------------------
//.reverse() => reverte o nosso array
// let Numeros = [70, 20, 1000000];

// Numeros.reverse();
// console.log(Numeros);

//-----------------------------------------------------------------------------------------------

// let nomes = ["joao", "pedro", "matheus", "maycon", "giulia"]

//.push() => adiciona no final do array
// nomes.push("Matheus");

//.unshift => adiciona no inicio do array
// nomes.unshift("Sophia");

//.pop() => remove um valor do array alem de remover ele retorna o valor
// nomes.pop();

//.shif() =>  remove o valor do inicio
// nomes.shift();

//.splice() => remove o valor que voce quer alem de dar para adicionar novos elemntos 
// nomes.splice(2, 1);


// console.log(nomes); 

//--------------------------------------------------------------------------------------------------
// let nomesAnimais = ["BOB", "Jade", "Max", "Ladrao"]; 

// // .includes() => se existe no array, se existir ele retorna true
// console.log(nomesAnimais.includes("Pompom"));

//--------------------------------------------------------------------------------------------------
// const valores = [19, 55, 600, 9000, 20];
 //quero os valores maiores que 50
// const maiores = valores.filter(num => num < 90);

// console.log(maiores);

//--------------------------------------------------------------------------------------------------
//.map() => Cria um novo array aplicando uma função a cada item.

// 1. lista de Nomes dos Alunos e notas
// let alunos = [
//     {Nome : "Giulia", Nota: 10},
//     {Nome : "Joao", Nota: 8},
//     {Nome : "Anna", Nota: 7},
//     {Nome : "Vinicius", Nota: 3},
//     {Nome : "Lucas", Nota: 5},
//     {Nome : "George", Nota: 6}
// ];

// //lista de nomes
// let listAluno = alunos.map(aluno => aluno.Nome);

// //função: 
// let alunosNomesDois = alunos.map(function(aluno) {
//     return aluno.Nome;
// })

// //lista de notas
// let listNota = alunos.map(aluno => aluno.Nota);


// console.log(listNota);

// 2. criar um array com mensagens personalizadas
// let nomes =  ["Caio", "Daniele", "Kabra"];

// //olá caio
// //olá dani

// let mensagem = nomes.map(itemDoArrayNomes => `olá, ${itemDoArrayNomes}`);
// let mensagem2 = nomes.map(itemDoArrayNomes => "olá, " + itemDoArrayNomes);

// console.log(mensagem);

// 3. Pegar apenas os primeiros caracteres de nomes
// let nomes = ["joao", "Emylli", "Marcus" , "Bernardo"];

// let inicialNomes = nomes.map(valoresDoArrayInicial => valoresDoArrayInicial[0]);
// console.log(inicialNomes);

// 4. Kaue@gmail.com, pedro@hotmail.com, joao@outlook.com
// let emails = [
//     "kaue@gmail.com",
//     "pedro@hotmail.com",
//     "joao@outlook.com"
// ];

// let dominios = emails.map(Element => Element.split("@")[1]);
// console.log(dominios);


