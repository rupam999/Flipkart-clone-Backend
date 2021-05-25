const bcrypt = require('bcrypt');

const encryptPassword = async (password) => {
    return await bcrypt.hash(password, 10);
}

const decryptPassword = async (password, hash) => {
    return await bcrypt.compareSync(password, hash);
}

module.exports = {
    encryptPassword,
    decryptPassword
}