const SignUpIn = require("../controllers/signInUp");

module.exports = (router) => {
    router.post("/login", SignUpIn.login);
}