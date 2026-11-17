const prompt = require("prompt-sync")()

const pagina = Number(prompt("Quantas páginas tem o livro? "))

if (pagina<=100) {
    console.log("Esse livro é pequeno")}

if (pagina>100 && pagina<300){
    console.log("Esse livro é médio")
}
if (pagina>=300){
    console.log("Esse livro é grande")
}
