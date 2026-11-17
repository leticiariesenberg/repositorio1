const reservas = ["Ana", "Bia", "Caio"]
const prompt = require("prompt-sync")()
const nome = prompt("Qual o nome do aluno? ")
if (nome && reservas){
    console.log("O nome está na fila")
} else if (nome !== reservas)
    {console.log("O nome agora entrará na fila " + reservas[0])}