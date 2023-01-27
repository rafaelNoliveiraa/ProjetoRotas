//Fazendo a importação do express
const express = require("express");
const router = require('./routes/index');
const mustache = require('mustache-express');

//configuração basica do app
const app = express();
app.use('/', router); //foi passado 1 rota pois criamos apenas 1 

app.use(express.json());

app.engine('mst', mustache(__dirname +'/views/partials','.mst'));
app.set('view engine', 'mst');

//pega o diretorio absolut do projeto e aumenta para a pasta viws concantenado
app.set('views', __dirname + '/views');

module.exports = app; //exportamos o app, pois vamos importa-lo no servidor   