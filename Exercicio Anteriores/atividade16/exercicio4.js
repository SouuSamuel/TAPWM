const fs =require('fs'); // carregando modulo filesystem
const data = fs.readFileSync('file.txt');
//a execução é bloqueada aqui até o arquivo ser lido
console.log(data.toString());