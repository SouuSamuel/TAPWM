let texto = require('./modulo1');
let app = require('./app/config/server');

// Importação das rotas passadas como função
let rotaHome = require('./app/routes/home')(app);
let rotaHistoria = require('./app/routes/historia')(app);
let rotaCursos = require('./app/routes/cursos')(app);
let rotaProfessores = require('./app/routes/professores')(app); // Adicionado (app)
let rotaAdicionarUsuarios = require('./app/routes/adicionar_usuarios')(app);

app.listen(3000, function () {
    console.log("Servidor iniciado na porta 3000");
});