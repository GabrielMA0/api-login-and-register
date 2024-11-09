const getAllUsers = () => {
    return global.users.map(({ password, ...userWithoutPassword }) => userWithoutPassword);
};

const getUserById = (id) => {

    const user = global.users.find(currentUser => currentUser.id === id);

    if (!user) return false;

    const { password = '', ...userWithoutPassword } = user

    return userWithoutPassword
}

module.exports = {
    getAllUsers,
    getUserById
};