// Crie um array de objetos com produtos e preços. Exiba no console o
// nome e o preço com R$ formatado.

let produtos = [
    {nome : "lapis", preco: 12.00},
    {nome : "bolsa", preco: 20.00},
    {nome : "Cafe", preco: 40.00}
];

let listNome = produtos.map(i => i.nome);
let listPreco = produtos.map(i => i.preco);

console.log(listNome[0] + " - " + "$" +`${listPreco[0]}`);
console.log(listNome[1] + " - " + "$" +`${listPreco[1]}`);
console.log(listNome[2] + " - " + "$" +`${listPreco[2]}`);

