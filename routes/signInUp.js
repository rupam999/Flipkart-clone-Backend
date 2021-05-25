const SignUpIn = require("../controllers/signInUp");

module.exports = (router) => {
    router.post("/user/register", SignUpIn.register);
}