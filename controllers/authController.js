const { User } = require('../models/User');
const { validateUser } = require('../validators/registerValidation');
const { validateLogin } = require('../validators/loginValidation');
const bcrypt = require('bcrypt')

exports.register =  (req, res) => {
    res.render("register");
};

exports.login =  (req, res) => {
    res.render("login");
};

exports.signUp = async (req, res) => {
    const { error }  =  validateUser(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne(req.body.email);
    console.log(user)
    if (user) return res.status(400).send('user already registered')

    const newUser =  {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    user = new User(newUser);
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt);
    user.save();

    console.log(user)
    res.redirect("/")
}

exports.signIn = async (req, res) => {
    const { error }  =  validateLogin({email : loginUser.email});
    if(error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email});
    console.log(user)
    if (!user) return res.status(400).send('invalid email or password')

    let userValidation = await bcrypt.compare(req.body.password, user.password);
    if(!userValidation) return res.status(400).send('invalid email or password');


    res.send('successfully logged in');
}

