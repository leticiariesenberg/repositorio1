const prompt = require("prompt-sync")()

const nome = prompt ("Digite seu nome: ")
const idade = prompt("Digite a sua idade: ")
const curso = prompt("Digite o seu curso: ")

console.log(`Meu nome é ${nome}, tenho ${idade} anos e faço ${curso}`)
