const leitor = {
    nome : "Anna",
    turma : 988
}
console.log (leitor.nome);
console.log (leitor.turma);

const livro = {
    id: 1,
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    ano: 1899,
    disponivel: true
  };

  livro.editora = "Garnier"
  for (let valor in livro) {
    console.log(valor + ":" + livro[valor]);
  }

  const revista = {
    titulo : "veja",
    edição : 159,
    mês : "janeiro"
  }

for (let campo in revista) {
    console.log(campo + ":" + revista [campo])
}
