const { Router } = require('express')
const Translate = require('../handlers/numeral-converter')

const routes = Router()

routes.post('/translate', Translate.translateNumber)

module.exports = routes