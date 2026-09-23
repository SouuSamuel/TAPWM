const dbConnection = require('../config/dbConnection');

module.exports = function (app) {
    app.get('/informacao/professores', function (req, res) {
        async function getProfessores() {
            try {
                // 1. O dbConnection() retorna a função connSQLServer
                const conn = dbConnection();

                // 2. Chama connSQLServer() com 'await' para obter a conexão resolvida do MSSQL
                const pool = await conn();
                 let professoresModel = app.models.professormodel;// variável que recupera a função exporta 

                // 3. Agora o método .request() estará disponível!
                const results = await pool.request().query('SELECT * from PROFESSORES');

                professoresModel.getProfessores(pool, function (error, results) {
                    res.render('informacao/professores', { profs: results.recordset });
                });


            } catch (err) {
                console.log(err);
                res.status(500).send('Erro ao buscar professores');
            }
        }

        getProfessores();
    });
};