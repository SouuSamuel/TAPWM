let texto = require('./modulo1');
let app = require('./app/config/server');//importando o arquivo server.js
let rotaHome = require('./app/routes/home')(app);
let rotaHistoria = require('./app/routes/historia')(app);
let rotaCursos = require('./app/routes/cursos')(app);
let rotaAdicionarUsuarios = require('./app/routes/adicionar_usuarios')(app);
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
 res.render("home/index")
});

app.listen(3000, function () {
    console.log("servidor iniciaodo na porta 3000");

});