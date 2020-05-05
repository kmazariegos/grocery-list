const express = require('express')  
const path = require('path')
const app = express()
const port = 3777
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../client/dist')))

app.listen(port, ()=>console.log(`Listening on port ${port}`))
