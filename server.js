const express = require('express')
const hbs = require('hbs')

const path = require('path')
require('dotenv').config()
const app = express()

let PORT = process.env.PORT || 3200


let viewPath = path.join(__dirname, './templates/views')
let patialsPath = path.join(__dirname, './templates/partials')
let derectoryPath = path.join(__dirname, '/public')

app.use(express.static(derectoryPath))
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(patialsPath)

/**
 *  Calling Router
 */

app.use('', require('./src/routes/indexRouter'))





app.listen(PORT, () => {
    console.log(`Server is running  at ${PORT}`)
})