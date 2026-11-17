const prompt = require("prompt-sync")()

const vetorLivros = [
{ id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, disponivel: true },
{ id: 2, titulo: "O Cortiço", autor: "Aluísio Azevedo", ano: 1890, disponivel: false },
{ id: 3, titulo: "Capitães da Areia", autor: "Jorge Amado", ano: 1937, disponivel: true }]
let qtdpublicados = 0;
for(const livro of livros){
    if(livro.ano < 1900) {
        qtdpublicados++
    }
}
const BuscaId = number(prompt("digite o id"));
let livroEncontrado = null;
for(const livro of vetorLivros) {
    if(livros.id === BuscaId){
        livroEncontrado = livro.titulo;
        console.log(("Livro encontrado:" + livroEncontrado));
        break;
    }
}

if(livroEncontrado ===null){
    console.log("nao encontrado");   
}