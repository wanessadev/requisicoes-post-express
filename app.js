const express = require('express'); // [cite: 48]
const app = express(); // [cite: 49]
const port = 3000; // [cite: 50]

app.use(express.json()); // Necessário para ler dados POST [cite: 69]

app.use(express.urlencoded({ extended: true }));

app.post('/api/post-example', (req, res) => { // [cite: 70]
    console.log('Dados:', req.body); // [cite: 71]
    res.send('Requisição POST bem-sucedida!'); // [cite: 72]
});

app.listen(port, () => { // [cite: 51]
    console.log(`Servidor rodando na porta ${port}`); // [cite: 52]
});
