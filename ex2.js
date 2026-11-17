const prompt = require("prompt-sync")()

const pagina = Number(prompt("Quantas páginas tem o livro? "))

if (pagina<=200) {
    console.log("Esse livro é pequeno")
} else {
    console.log("Este livro é grande")
}