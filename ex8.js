const leitores = [{
    nome : "João",
    turma : 1
},

{
   nome : "Maria",
   turma : 2
},

{
   nome : "Fabio",
   turma : 3
}]

for (const chave of leitores) {
   console.log(chave.nome + ":" + chave.turma);
}