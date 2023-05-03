const express = require('express'); //cria um acesso à biblioteca

const server = express();

server.use(express.json());

// server.use(express.json()); //transforma em arquivo json

// Validação/teste
// server.use((req, res, next) => { 
//     console.log("Requisição chamada!");
//     return next();  //Next, responsável por renderizar/seguir/carregar a página
// })

function checkIndexCurso(req, res, next) {
     if(!cursos[req.params.index]){
        return res.status(400).json({error: "Index inválido!"});
     }
     return next();
}

function checkCurso(req, res, next) {//Não permite que adicione cursos vazios
    if (!req.body.name) {
        return res.status(400).json({ error: "Nome do curso é obrigatório" });//Irá responder como Erro 400
    }
    return next();
}

//query params = ?nome=TayTay
// route params = curso/1
// request Body = {nome: 'NodeJs; tipo: BackEnd'} 

const cursos = ['NodeJs', 'PHP', 'Java'];


// listagem de todos os cursos
server.get('/cursos', checkIndexCurso,(req, res) => {// mostra todos os valores dentro do array, todos os cursos
    return res.json(cursos);
})

// listagem de um curso
server.get('/cursos/:index', checkIndexCurso, (req, res) => { //buscar/lista valores do index
    const { index } = req.params;// mostra um dos valores dentro do array

    return res.json(cursos[index]);//retorna todos os cursos de uma vez
})

//Criar um curso
server.post('/cursos', checkCurso, (req, res) => { //preparo para enviar a req
    const { name } = req.body;// adiciona "cursos" 
    cursos.push(name); //push, adiciona dentro do array. Insert, insere dentro da tabela

    return res.json(cursos);
})

server.put('/cursos/:index', (req, res) => {//altera e adiciona "cursos" ao array
    const { index } = req.params; //exibe as informações
    const { name } = req.body;//acrescenta informações ou nomes 
    cursos[index] = name;// mostra os valores adicionados ao array

    return res.json(cursos);
})

server.delete('/cursos/:index', (req, res) => { //Deleta valores, "cursos"
    const { index } = req.params;
    cursos.splice(index, 1); // Tem função de remover  um determinado valor dentro do array

    return res.json(cursos);

})

server.listen(3000);//porta do servidor(http://localhost:3000/cursos)