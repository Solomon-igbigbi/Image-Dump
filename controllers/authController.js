exports.register =  (req, res) => {
    res.render("register");
};

exports.login =  (req, res) => {
    res.render("login");
};

exports.signUp = (req, res) => {
    const User = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }
    console.log(User)
    res.redirect("/")
}

