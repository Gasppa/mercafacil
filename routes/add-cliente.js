const express = require('express')
const auth = require('../middlewares/auth')
const router = express.Router()
const ClienteMacapaDAO = require('../models/ClienteMacapa')
const ClienteVarejaoDAO = require('../models/ClienteVarejao')

router.post('/', auth, async (req, res, next)=>{

  switch (req.cliente) {
    case 'Macapá':

      try {
        await ClienteMacapaDAO.save(req.body.contacts)
        return res.status(200).send({
          msg: 'Os contatos de Macapá foram salvos.'
        })
      } catch (error) {
        return res.status(500).send({
          error: 'Alguém derrubou café no modem.'
        })
      }

      break;

    case 'Varejão':

      try {
        await ClienteVarejaoDAO.save(req.body.contacts)
        return res.status(200).send({
          msg: 'Os contatos de Varejão foram salvos.'
        })
      } catch (error) {
        return res.status(500).send({
          error: 'Alguém derrubou café no modem.'
        })
      }

      break;

    default:
      return res.status(401).send({
        error: 'Você precisa se autenticar para visualizar essa página'
      });
  }

  res.send('salvei')
})

module.exports = router