const jwt = require('jsonwebtoken')

const authenticationToken = function(payload) {
    const token = jwt.sign({ payload }, process.env.secrets);
    return token
}

module.exports = authenticationToken