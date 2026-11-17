/*Scanner sc = new Scanner(System.in); 
int dias = sc.nextInt(); 
for (int i = 1; i <= dias; i++) { 
 System.out.println("Dia " + i + " de empréstimo"); 
}*/ 
const prompt = require("prompt-sync")()

const dias = prompt("Informe a quantidade de dias")
for (let i = 0; i <= dias; i++) {
    console.log("Dia " + i + " de emprestimo")
} 
