const express = require('express');
const router = express.Router();

const Register = require('../controllers/Register')

router.get('/', (req, res) => {
    res.render('cadastro')
})

router.post('/', (req, res) => {

    const result = Register(req.body);

    res.send(result);
})

module.exports = router;