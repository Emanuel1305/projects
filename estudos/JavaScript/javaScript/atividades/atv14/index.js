import express from 'express';

const app = express();
const port = 3000;

app.get('/usuarios', (req, res) => {
    res.send('Olá mundo!');
});

app.listen(port, () => {
    console.log('escutando...');
})