let paginas = [256, 180, 320, 98, 410, 150];
let total = 0;
let menor = paginas[0];
for (let i = 0; i < paginas.length; i++) {
    total += paginas[i]
    if (menor > paginas[i]) {
        menor = paginas[i]
    }
}

console.log("A menor quantidade de paginas é: " + menor)
console.log("Media " + total / paginas.length);

let acervo = ["Duna", "1984", "Iracema", "Senhora"];

if (acervo.includes("Iracema")){console.log(acervo.indexOf("Iracema"))}
else {console.log("Livro não encontrado")}
;

let estante = [
    ["Dom Casmurro", "Iracema", "Senhora"],
    ["1984", "Duna", "Neuromancer"],
    ["Clean Code", "Lógica de Programação", "SQL Básico"]
    ];
    for (let i = 0; i < estante.length; i++) {
        console.log(estante[i][0])
    };