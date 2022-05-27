//arquivo do servidor local
const app = require("./src/app"); // peguei o express lá do app.js
const PORTA = 1313; //peguei o número de uma porta que geralmente fica desocupada 


app.listen(PORTA, () => {
    console.log("Servidor rodando na porta " + PORTA);  
}) //utilizei uma função para pegar o servidor , como primeiro parâmetro a porta , e uma função anônima que mostra no console se o servidor está rodando