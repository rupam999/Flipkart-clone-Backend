const USER_MODEL = require('../models/userModel');

const register = async (req, res) => {
    const {name, email, password, userType='buyer'} = req.body;

    let approved;
    if(userType === 'buyer') {
        approved = true;
    } else {
        approved = false;
    }

    const user = new USER_MODEL.User({
        name,
        email,
        password,
        userType,
        approved
    });

    await user.save((err, response) => {
        if(err) {
            // console.log(err);
            res.status(400);
            res.send({
                message: 'Error in Registration'
            });
        } else {
            res.send({
                name: response.name,
                email: response.email,
                userType: response.userType
            });
        }
    });
}

module.exports = {
    register
}