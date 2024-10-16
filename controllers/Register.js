const Register = (req) => {

    const userExists = global.users.some(user => user.email === req.email);

    if (userExists) {
        return 'Usuário já possui cadastro!'
    }

    const user = {
        name: req.name,
        lastName: req.lastName,
        age: req.age,
        email: req.email,
        password: req.password
    };

    global.users.push(user);

    return 'Usuário cadastrado com sucesso!';
}

module.exports = Register;