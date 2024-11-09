const { v4: uuidv4 } = require('uuid');
const encryptPassword = require('../utils/encryptPassword')

const register = async (req) => {
    try {
        const { name, lastName, age, email, password } = req;

        if (!name || !lastName || !email || !password) {
            return { message: 'Parâmetros inválidos ou ausentes', success: false, status: 400 };
        }

        const userExists = global.users.some(user => user.email === email);

        if (userExists) {
            return { message: 'Usuário já possui cadastro!', success: false, status: 409 };
        }

        const encryptedPassword = await encryptPassword(password);

        const uniqueId = uuidv4();
        const ageNumber = isNaN(parseInt(age)) ? 0 : parseInt(age);

        const user = {
            id: uniqueId,
            name,
            lastName,
            age: ageNumber,
            email,
            password: encryptedPassword
        };

        const userWithoutPassword = { ...user }; // Cria uma cópia do objeto
        delete userWithoutPassword.password;     // Remove o campo 'password'

        global.users.push(user);

        return { message: 'Usuário cadastrado com sucesso!', success: true, user: userWithoutPassword, status: 201 };

    } catch (error) {
        console.error('Erro no cadastro:', error);
        return { message: 'Erro interno no servidor', success: false, status: 500 };
    }
};

const deleteUser = (id) => {

    const index = global.users.findIndex(item => item.id === id);

    if (index !== -1) {

        global.users.splice(index, 1);

        return { message: 'Usuário apagado com sucesso!', success: true };
    }

    return { message: 'Usuário não localizado', success: false };

}

const changePassword = async (id, password) => {

    let updated = false;

    const newPassword = await encryptPassword(password)

    global.users.forEach(user => {
        if (user.id === id) {
            user.password = newPassword;
            updated = true;
        }
    });

    return updated;
}

module.exports = {
    register,
    deleteUser,
    changePassword
};