const express = require('express');
const router = express.Router();
const sales = require ('../models/sales');

router.get('/', async (req, res) => {
    const teste = await sales.find();
    res.send(teste);
});

router.get('/:id', async (req, res) => {
    const teste = await sales.findOne({_id: req.params.id});
    res.send(teste);
});

router.post('/', async (req, res) => {
    const newSale = new sales(req.body);
    newSale.save();
    res.send('Cadastro realizado com sucesso');
});

router.delete('/:id', async (req, res) => {
    await sales.remove({_id: req.params.id});
    res.send ("Cadastro excluido com sucesso");
});

module.exports = router;