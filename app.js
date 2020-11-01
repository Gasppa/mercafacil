const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/signin', require('./routes/signin'));
app.use('/api/add-cliente', require('./routes/add-cliente'));

app.listen(PORT, () => {
  console.log('server on')
})