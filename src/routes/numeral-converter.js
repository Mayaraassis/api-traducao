const { Router } = require('express')
const Translate = require('../handlers/numeral-converter')

const routes = Router()

routes.post('/translate', Translate.translateNumber)
routes.get('/', (req, res) => {
  console.log('qualuqer ')
}

)
module.exports = routes