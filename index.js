require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)
var cors = require('cors')
app.use(cors()) 
const PORT = process.env.PORT || 3000;

app.use(express.json())
const numberRoutes = require('./routes/numberRoutes')
app.use('/tradutor', numberRoutes)

app.get('/', (req, res ) => {

    res.json({message: 'api traducao'})
})

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.fk2exhs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then( () => {
    console.log('Server has started!')
    app.listen(PORT)
})
.catch((err) => console.log(err))
