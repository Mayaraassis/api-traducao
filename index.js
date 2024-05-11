require('dotenv').config()
const PORT = process.env.PORT || 3000;

const cors = require('cors')
const express = require('express')

const numberRoutes = require('./src/routes/numeral-converter')

const app = express()

app.use(express.json())
app.use(cors())
app.use(numberRoutes)

app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`)
})