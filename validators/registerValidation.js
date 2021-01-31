const Joi = require('joi');

function validateUser(user) {
    const schema = Joi.object({
        username: Joi.string().min(5).required(),
        email: Joi.string().email({ minDomainSegments: 2}).email(),
        password: Joi.string().min(6).required(255)
    })

    return schema.validate(user)
}

exports.validateUser = validateUser;