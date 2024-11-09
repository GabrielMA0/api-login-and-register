const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById } = require('../service/getUsers')
const { register, deleteUser, changePassword } = require('../controllers/Users')

// Rota para retornar todos os usuários
router.get('/', (req, res) => {
    const users = getAllUsers()
    res.status(200).json(users);
});

// Rota para retornar um usuário específico
router.get('/:id', (req, res) => {
    const user = getUserById(req.params.id);

    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'Usuário não localizado', success: false });
    }
});

// Rota para cadastrar um novo usuário
router.post('/register', async (req, res) => {
    try {
        const result = await register(req.body);

        if (result.success) {
            return res.status(result.status).json(result);
        } else {
            return res.status(result.status).json({ message: result.message || 'Erro ao cadastrar usuário.' });
        }
    } catch (error) {
        console.error('Erro ao processar a requisição:', error);
        return res.status(500).json({ message: 'Erro interno no servidor.' });
    }
});

// Rota para deletar um usuário
router.delete('/delete/:id', (req, res) => {
    const result = deleteUser(req.params.id);

    if (result.success) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Usuário não encontrado.' });
    }
});

// Rota para alterar senha de um usuário
router.put('/change-password/:id', (req, res) => {
    const result = changePassword(req.params.id, req.body.password);

    if (result) {
        res.status(200).json({ message: 'Senha alterada com sucesso!' });
    } else {
        res.status(404).json({ message: 'Usuário não encontrado.' });
    }
});

module.exports = router;