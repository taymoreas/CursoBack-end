const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let ceps = [];

app.get('/ceps', (req, res) => {
    res.json(ceps);
})

app.get('/ceps/:num', (req, res) => {//Mostra todos os ceps
    const { num } = req.params;
    const cep = ceps.find(v => v.num === num);
    if (cep) {
        res.json(cep);
    } else {
        res.status(404).json({ message: 'CEP não encontrado.' });
    }
});

app.post('/ceps', (req, res) => {//Adiciona um novo cep
    const { num, rua, bairro, cidade, estado, pais } = req.body;
    const cep = { num, rua, bairro, cidade, estado, pais };
    ceps.push(cep);
    res.status(201).json({ message: 'CEP cadastrado com sucesso.' });
});

app.put('/ceps/:num', (req, res) => {//Atualiza info dos ceps
    const { num } = req.params;
    const { rua, bairro, cidade, pais } = req.body;
    const cep = ceps.find(v => v.num === num);
    if (cep) {
        cep.rua = rua || cep.rua;
        cep.bairro = bairro || cep.bairro;
        cep.cidade = cidade || cep.cidade;
        cep.pais = pais || cep.pais;
        res.json({ message: 'Informações do CEP atualizadas com sucesso.' });
    } else {
        res.status(404).json({ message: 'CEP não encontrado.' });
    }
});

app.delete('/ceps/:num', (req, res) => {//Deleta todos os ceps
    const { num } = req.params;
    const cepIndex = ceps.findIndex(v => v.num === num);
    if (cepIndex !== -1) {
        ceps.splice(cepIndex, 1);//Splice, remove itens de um array, as posições e a quantidade de intens retirada são específicadas dentro dos parenteses
        res.json({ message: 'Veículo excluído com sucesso.' });
    } else {
        res.status(404).json({ message: 'Veículo não encontrado.' });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});




