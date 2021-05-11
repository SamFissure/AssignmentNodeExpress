const express = require('express');

const fs = require('fs');

const port = 6500;
const app = express();

//app.get('/', function (req, res) {

//  let data = JSON.parse(fs.readFileSync('db.json','utf-8'))

//  res.json(data)

//})

app.listen(port,(err)=>{ 
    if(err) throw err;
    console.log('server is running on\t' + port)
})