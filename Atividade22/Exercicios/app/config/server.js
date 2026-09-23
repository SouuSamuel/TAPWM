let express = require('express'); 
let consign = require('consign'); 
let app = express(); 
let bodyParser = require('body-parser');
app.set('view engine', 'ejs'); 
app.set('views', './app/views'); 
app.use(bodyParser.urlencoded({extended: true})); 

consign({cwd:'app'}) // para incluir a pasta app 
 .include('routes') 
 .then('config/dbConnection.js') // garante que todos os arquivos do routes tenham sido processados 
 .then('models') 
 .into(app); 
module.exports = app; 
