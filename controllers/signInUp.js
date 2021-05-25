const USER_MODEL = require('../models/userModel');

const register = async (req, res) => {
    const {name, email, password, userType='buyer'} = req.body;

    const user = new USER_MODEL.User({
        name,
        email,
        password,
        userType
    });

    await user.save((err, response) => {
        if(err) {
            console.log(err)
            res.send({
                message: 'ERROR'
            });
        }
        res.send({
            name: 'data',
            response
        });
    });
}

module.exports = {
    register
}