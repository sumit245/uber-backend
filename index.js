const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')



const app = express()
app.use(bodyParser.json())
app.use(cors())

const port = 5000;

const server = app.listen(port, function () {
    console.log('Server runnig on port', port)
})