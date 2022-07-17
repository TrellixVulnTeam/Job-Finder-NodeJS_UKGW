const express    = require('express');
const app        = express();
const db         = require('./dataBase/connection');
const bodyParser = require('body-parser');

const PORT = 5058;

app.listen(PORT, function(){
    console.log(`O express esta rodando na porta ${PORT}.`)

});
//body parser
app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());

//Conexão com o banco
db
  .authenticate()
  .then(() => {
    console.log("Conectou ao banco com sucesso");
  })
  .catch(err => {
    console.log("Ocorreu um erro ao conectar", err);
  });



//Rotas
app.get('/', (req, res)=>{
    res.send("Está fucionando.")
});

//jobs routes
app.use('/jobs', require('./routes/jobs'));