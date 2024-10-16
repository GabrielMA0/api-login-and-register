const LogIn = (req) => {
    const userExists = global.users.some(user => user.email === req.email && user.password === req.password);

    if (userExists) return true;
    if (!userExists) return false;
}

module.exports = LogIn