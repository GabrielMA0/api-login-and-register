const bcrypt = require('bcrypt');
const { z } = require('zod');

const LogIn = async (req) => {
    const { email, password } = req;

    const schema = z.object({
        email: z.string().email('Email inválido').min(1, 'Email obrigatório'),
        password: z.string().min(1, 'Senha é obrigatória')
    });

    try {
        const validation = schema.safeParse({ email, password });

        if (!validation.success) {
            console.log(validation.error.format());
            return false;
        }

        const user = global.users.find(user => user.email === email);

        if (user) {
            const userExists = await bcrypt.compare(password, user.password);
            return userExists;
        }

        throw new Error('Usuário não encontrado');
    } catch (err) {
        console.log(err.message || 'Erro desconhecido');
        return false;
    }

}

module.exports = LogIn