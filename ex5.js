const prompt = require("prompt-sync")()

const numero = Number(prompt("Escolha um número para ver a sua tabuada"))

for (let i = 1; i <=10; i++) {
    const resultado = i * numero

    console.log(`${numero}x${i}=${resultado}`)
    
}
