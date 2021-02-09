const Joi = require('joi');

function validateLogin(user) {
    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2}).email(),
        // password: Joi.string().min(6).required(255)
    })

    return schema.validate(user)
}

exports.validateLogin = validateLogin;