const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const config = require('config')

function checkCliente(req) {
  if(req.header('api-key') == config.get('macapa_apikey')){
    return {
      cliente: "Macapá"
    }
  } else if (req.header('api-key') == config.get('varejao_apikey')){
    return {
      cliente: "Varejão"
    }
  }
}

router.post('/', (req, res) => {

  const payload = checkCliente(req)

  jwt.sign(
    payload, 
    config.get('jwtSecret'), 
    {expiresIn: 360000},
    (err, token) => {
      if(err) throw err
      return res.json({ token })
    }
  )
})

module.exports = router