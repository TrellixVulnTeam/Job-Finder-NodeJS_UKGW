const express = require('express');
const router  = express.Router();
const Job     = require('../models/Job');

//form da rota de envio
router.get('/add', (req, res)=>{
    res.render('add');
});

//detalhes da vaga
router.get('/view/:id', (req, res)=>Job.findOne({
  where:{id: req.params.id}
}).then(job=>{
    res.render('view', {
        job
    });
}).catch(err=> console.log(err)));



//Adicionar job via post
router.post('/add', (req, res)=>{

    let {title, salary, company, description, email, new_job} = req.body;

    //insert
    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job
    })
    .then(()=>res.redirect('/'))//quando der certo redireciona pra home
    .catch(err => console.log(err));
});

module.exports = router;

