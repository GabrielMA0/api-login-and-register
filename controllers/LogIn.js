const bcrypt = require('bcrypt');
const yup = require('yup');

const LogIn = async (req) => {
    const { email, password } = req;

    const schema = yup.object().shape({
        email: yup.string().email().required('Email obrigatório'),
        password: yup.string().required('Senha é obrigatória')
    });

    try {
        await schema.validate({ email, password });

        const user = global.users.find(user => user.email === email);

        if (user) {
            const userExists = await bcrypt.compare(password, user.password);
            return userExists;
        }

        throw new Error('Usuário não encontrado');
    } catch (err) {
        console.log(err.errors);
        return false;
    }
}

module.exports = LogIn