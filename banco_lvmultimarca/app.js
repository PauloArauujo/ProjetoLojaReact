const express =  require ('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
 
 
app.use(bodyParser.json());
app.use(express.json());
 
app.get("/", (req, res) => {
    res.send("Deu bom :) !");
});
 
 
//configurando a porta do server
app.listen(port, () => {
    console.log('Servidor rodando na porta: ', port);
});
 
module.exports = app;