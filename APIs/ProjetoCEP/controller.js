let pessoas = [];

function getpessoas(req, res) {
    res.json(pessoas);
}

function getpessoaBycpf(req, res) {
    const { cpf } = req.params;
    const pessoa = pessoas.find(v => v.cpf === cpf);
    if (pessoa) {
        res.json(pessoa);
    } else {
        res.status(404).json({ message: 'Pessoa não encontrada.' });
    }
}

function createpessoa(req, res) {
    const { cpf, sexo, nacionalidade, dataNasc } = req.body;
    const pessoa = { cpf, sexo, nacionalidade, dataNasc };
    pessoas.push(pessoa);
    res.status(201).json({ message: 'Cpf cadastrado com sucesso.' });
}

function updatepessoa(req, res) {
    const { cpf } = req.params;
    const { sexo, nacionalidade, dataNasc } = req.body;
    const pessoa = pessoas.find(v => v.cpf === cpf);
    if (pessoa) {
        pessoa.sexo = sexo || pessoa.sexo;
        pessoa.nacionalidade = nacionalidade || pessoa.nacionalidade;
        pessoa.dataNasc = dataNasc || pessoa.dataNasc;
        res.json({ message: 'Informações do Cpf atualizadas com sucesso.' });
    } else {
        res.status(404).json({ message: 'Cpf não encontrado.' });
    }
}

function deletepessoa(req, res) {
    const { cpf } = req.params;
    const pessoaIndex = pessoas.findIndex(v => v.cpf === cpf);
    if (pessoaIndex !== -1) {
        pessoas.splice(pessoaIndex, 1);
        res.json({ message: 'Cpf excluído com sucesso.' });
    } else {
        res.status(404).json({ message: 'Cpf não encontrado.' });
    }
}

module.exports = { getpessoas, getpessoaBycpf, createpessoa, updatepessoa, deletepessoa };
