const USER_MODEL = require('../models/userModel');
const utitilits = require('../utils/utlities');

const register = async (req, res) => {
    const {name, email, password, userType='buyer'} = req.body;

    let approved;
    if(userType === 'buyer') {
        approved = true;
    } else {
        approved = false;
    }

    const hashPassword = await utitilits.encryptPassword('abc');

    const user = new USER_MODEL.User({
        name,
        email,
        password: hashPassword,
        userType,
        approved
    });

    await user.save((err, response) => {
        if(err) {
            console.log(err);
            res.status(400);
            res.json({
                message: 'User Exists'
            });
        } else {
            const token = utitilits.generateToken(response._id);
            res.json({
                message: 'success',
                id: response._id,
                name: response.name,
                email: response.email,
                userType: response.userType,
                token
            });
        }
    });
}

const login = async (req, res) => {
    const {email, password} = req.body;

    USER_MODEL.User.findOne({ email }, async (err, result) => {
        if(err){
            // console.log(err);
            res.status(400);
            res.send({
                message: 'Internal Server Error'
            });
        } else {
            if(result) {
                try{
                    const passwordResult = await utitilits.decryptPassword(password, result.password);
                    if(passwordResult) {
                        const token = utitilits.generateToken(result._id);
                        res.json({
                            messge: 'sucess',
                            id: result._id,
                            name: result.name,
                            email: result.email,
                            userType: result.userType,
                            token
                        });
                    } else {
                        res.json({
                            message: 'Wrong Password'
                        });
                    }
                } catch(err) {
                    // console.log(err);
                    res.status(400);
                    res.json({
                        message: 'Internal Server Error'
                    });
                }
            } else {
                res.json({
                    message: 'No User Found'
                });
            }
        }
    });
}

module.exports = {
    register,
    login
}