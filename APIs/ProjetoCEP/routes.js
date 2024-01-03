const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/pessoas', controller.getpessoas);
router.get('/pessoas/:cpf', controller.getpessoaBycpf);
router.post('/pessoas', controller.createpessoa);
router.put('/pessoas/:cpf', controller.updatepessoa);
router.delete('/pessoas/:cpf', controller.deletepessoa);

module.exports = router;
