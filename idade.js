const anoNascimento = 2007;
const anoAtual = new Date().getFullYear(); 
const idade = anoAtual - anoNascimento;

document.getElementById("idade").textContent = idade;
