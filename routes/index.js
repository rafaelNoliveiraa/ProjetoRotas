const express = require("express");
//Rotas (quando o servidor for acessado, para onde ele vai?)
const router = express.Router();

router.get('/', (req,res) => { //Rota principal
    let obj={
        nome:req.query.nome,
    };
    res.render('home',obj);
});
router.get('/historico', (req,res) => { 
    let obj={
        materia1:[{nome:'Algoritmo e Lógica de Programação', status:'Aprovado',nota:'8.30',frequencia:'100%'}],
        materia2:[{nome:'Modelagem de Banco de Dados', status:'Aprovado',nota:'10.00',frequencia:'95%'}],
        materia3:[{nome:'Engenharia de Software I', status:'Aprovado',nota:'7.90',frequencia:'100%'}],
        materia4:[{nome:'Sistemas Operacionais e Redes de Computadores', status:'Aprovado',nota:'6.20',frequencia:'100%'}],
        materia5:[{nome:'Desenvolvimento Web I', status:'Aprovado',nota:'9.8',frequencia:'80%'}],
        materia6:[{nome:'Design Digital', status:'Aprovado',nota:'8.80',frequencia:'100%'}],
        
        materia7:[{nome:'Banco de Dados Relacional', status:'Aprovado',nota:'7.80',frequencia:'100%'}],
        materia8:[{nome:'Estrutura de Dados', status:'Aprovado',nota:'6.00',frequencia:'100%'}],
        materia9:[{nome:'Engenharia de Software II', status:'Aprovado',nota:'6.50',frequencia:'100%'}],
        materia10:[{nome:'Técnica de Programação I', status:'Aprovado',nota:'7.70',frequencia:'100%'}],
        materia11:[{nome:'Desenvolvimento Web II', status:'Concluindo',nota:'0',frequencia:'100%'}],
        materia12:[{nome:'Matemática para Computação', status:'Aprovado',nota:'8.80',frequencia:'100%'}]
    };
    res.render('rota1',obj);
});
router.get('/horarios', (req,res) => { 
    let obj={
        nome:req.query.nome,
    };
    res.render('rota2',obj);
});

module.exports = router;