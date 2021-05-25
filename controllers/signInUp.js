const USER_MODEL = require('../models/userModel');
const utilits = require('../utils/utlities');

const register = async (req, res) => {
    const {name, email, password, userType='buyer'} = req.body;

    let approved;
    if(userType === 'buyer') {
        approved = true;
    } else {
        approved = false;
    }

    const hashPassword = await utilits.encryptPassword(password);

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
            if(!response.approved) {
                res.json({
                    message: 'Account Not Approved'
                });
            } else {
                const token = utilits.generateToken(response._id);
                res.json({
                    message: 'success',
                    id: response._id,
                    name: response.name,
                    email: response.email,
                    userType: response.userType,
                    token
                });
            }
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
                if(!result.approved) {
                    res.json({
                        message: 'Account Not Approved'
                    });
                } else {
                    try{
                        const passwordResult = await utilits.decryptPassword(password, result.password);
                        if(passwordResult) {
                            const token = utilits.generateToken(result._id);
                            res.json({
                                message: 'success',
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