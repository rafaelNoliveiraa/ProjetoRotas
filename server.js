const app = require('./app');
const mongoose = require('mongoose');//chama o mongoose


require('dotenv').config({path: 'variables.env'});

/*//
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology:true});  //String de conexão como parametro
mongoose.Promise = global.Promise;  //liberando funcionalidae para o mongoose
mongoose.connection.on('error', (error) => { //log de erro
    console.error("ERROR: " +error.message);
})
mongoose.set('strictQuery',false);*/
app.set('port',process.env.PORT|| 7777);
const server = app.listen(app.get('port'),() => {
    console.log("Servidor Rodando na porta: " +server.address().port);  
}); 


