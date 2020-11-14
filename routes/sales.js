const express = require('express');
const router = express.Router();
const Sales = require ('../models/sales');

router.get('/', async (req, res) => {
    const sales = await Sales.find();
    res.status(200).json(sales);
});

router.get('/:id', async (req, res) => {
    const sale = await Sales.findOne({_id: req.params.id});
    res.status(200).json(sale);
});

router.post('/', async (req, res) => {
    const newSale = new Sales(req.body);
    newSale.save();
    res.status(201).send('Cadastro realizado com sucesso');
});

router.delete('/:id', async (req, res) => {
    await Sales.remove({_id: req.params.id});
    res.status(200).send("Cadastro excluido com sucesso");
});

module.exports = router;