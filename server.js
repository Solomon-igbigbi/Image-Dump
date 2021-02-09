require('dotenv').config();

const app = require('./src/app')


app.listen(process.env.port, () => {
  console.log(`Working On ${process.env.port}!`)
})