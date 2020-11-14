const express = require ('express');
require ('./db');

const app = express();

app.use(express.json());

const salesRouter = require ('./routes/sales');

app.use('/sales', salesRouter);

const PORT = process.env.PORT || 3001

app.listen(PORT, () =>{
    console.log(`Servidor listening ${PORT}`);
});