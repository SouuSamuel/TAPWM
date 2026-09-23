let sql = require('mssql');
let connSQLServer = function () {
    const sqlConfig = {
        user: 'DS2612026',
        password: 'Samu_2903',
        database: 'POO',
        server: 'APOLO',
        options: {
            encrypt: false,
            trustServerCertificate: true
        }
    }
    return sql.connect(sqlConfig);
}

// exportando a função e quando chamar a 
// página ele conecta 
module.exports = function () {
    console.log('O autoload carregou o módulo de conexão com o bd');
   return connSQLServer; 
}