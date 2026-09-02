let express = require('express');
let app = express();
app.set('view engine', 'ejs');//o mecanismo de engine a ser usado

app.set('views', './app/views');//definindo o caminho das views
module.exports = app;//exportando o app para ser usado em outros arquivos