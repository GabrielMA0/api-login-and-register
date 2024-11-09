const express = require('express');
const router = express.Router();

const LogIn = require('../controllers/LogIn');

// Rota para logar no app
router.post('/', async (req, res) => {
    try {
        const isLoggedIn = await LogIn(req.body);

        if (isLoggedIn) {
            res.status(200).json({ message: 'Login efetuado com sucesso!', success: true });
        } else {
            res.status(401).json({ message: 'Falha no login. Verifique suas credenciais.', success: false });
        }
    } catch (error) {
        console.error('Erro ao processar a requisição:', error);
        return res.status(500).json({ message: 'Erro interno no servidor.' });
    }

});


module.exports = router;