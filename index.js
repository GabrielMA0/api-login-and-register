const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const cadastroRoutes = require('./routes/cadastroRoutes');
const loginRoutes = require('./routes/loginRoutes');
// Config
// Template Engine

global.users = [];

const port = process.env.PORT || 3000;

app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Rotas
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html')
})

app.use('/cadastro', cadastroRoutes);
app.use('/login', loginRoutes);


app.listen(port, () => {
    console.log("Servidor rodando!")
});