const express = require('express')

const fs = require('fs')

const app = express()

app.get('/', function (req, res) {

  let data = JSON.parse(fs.readFileSync('db.json','utf-8'))

  res.json(data)

})

app.listen(3000)