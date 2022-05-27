const express  = require("express"); //peguei o pacote express
const app = express(); //instanciei o pacote express , e coloquei aberto para todas as funções
const cors = require("cors");
app.use(cors()); // coloquei a regrinha de CORS para facilitar o Front-End

app.use(express.json()); //utilizei uma função para pegar o body da request e transformar ele em JSON 

module.exports = app; //coloquei o express aberto para que todos possam pegar 