const express = require('express');
const app = express();
const usersRoutes = require('./routes/usersRoutes');
const loginRoutes = require('./routes/loginRoutes');

global.users = [];

const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());
// Rotas
app.get('/', (req, res) => {
    res.send('Teste de Api');
})

app.use('/users', usersRoutes);
app.use('/login', loginRoutes);

app.listen(port, () => {
    console.log("Servidor rodando!")
});