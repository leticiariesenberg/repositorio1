const prompt = require("prompt-sync")();
 let produto = [
    {nome: "Apontador", preco: 5.50},
    {nome: "Lápis", preco: 2.0},
    {nome: "Borracha", preco: 1.5}
]
produto.sort ((a ,b) => a.preco - b.preco)
for (let i = 0; i < produto.length; i++) {
    console.log(produto[i].nome + " " + produto[i].preco)        
}

  