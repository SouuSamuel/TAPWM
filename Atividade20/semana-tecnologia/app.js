
let app = require('./app/config/server');//executando o express

let rotaHome = require('./app/routes/home');
rotaHome(app);

const rotaInscricao = require('./app/routes/inscricao'); 
rotaInscricao(app);

const rotaContato = require('./app/routes/contato'); 
rotaContato(app);

const rotaProgramacao = require('./app/routes/programacao'); 
rotaProgramacao(app);

const rotaSobre = require('./app/routes/sobre'); 
rotaSobre(app);

const rotaNovidades = require('./app/routes/novidades'); 
rotaNovidades(app);
 
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
 res.render("home/index")
});



app.listen(3000, function () {
    console.log("servidor iniciado");
 
});
 