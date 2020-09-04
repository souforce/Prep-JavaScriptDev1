const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Olá mundo nodejs! 4');
});

app.post('/create', (request, response) => {
    let idade = request.body.idade;
    let nome = request.body.nome;

    response.send({
        now : new Date(),
        age: idade,
        name: nome
    });
});

//app.delete('/delete')
//app.put('/update')
//https://docs.npmjs.com/cli-documentation

app.listen(port, () => {
    console.log('Abra no seu navegador: http://localhost:' + port);
});