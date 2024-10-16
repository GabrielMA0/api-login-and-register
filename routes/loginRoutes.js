const express = require('express');
const router = express.Router();

const LogIn = require('../controllers/LogIn')

router.get('/', (req, res) => {

    res.render('login')
})

router.post('/', (req, res) => {

    const isLoggedIn = LogIn(req.body);

    if (isLoggedIn) {
        res.send('Login efetuado com sucesso!');
    } else {
        res.send('Falha no login. Verifique suas credenciais.');
    }
});

module.exports = router;