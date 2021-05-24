const DB = require('../DB/config');

const login = (req, res) => {
    const {} = req.body;
    DB.connectDB();
    res.send(`OK`);
}

module.exports = {
    login
}