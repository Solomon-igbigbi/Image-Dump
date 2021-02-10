const jwt = require('jsonwebtoken')

function auth(req, res, next) {
    //  console.log(rettrq.header)
     const token = req.headers['x-auth-token']
     console.log(token)
     if(!token) return res.status(401).redirect('/auth/login');

     try {
         const decode = jwt.verify(token, process.env.secrets)
         console.log(decode)
         req.user = decode;
         next()
     }
     catch (ex) {
         res.status(400).send('Invalid Token')

     }
}

module.exports = auth