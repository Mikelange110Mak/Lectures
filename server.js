const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const fs = require('fs')

const JSONdb = require('simple-json-db');
const db = new JSONdb(`${__dirname}/src/js/test.json`);
const miniDataBase = db.JSON();
console.log(miniDataBase['data']);

app.use(express.urlencoded({ extended: false }))
app.use(express.static('src'))
app.use(bodyParser.json());


app.post('/datapost', (req, res, next) => {
   let name = req.body.object.name
   let phone = req.body.object.phone
   let obj = { name, phone }
   console.log(obj);
   miniDataBase['data'].push(obj)
   res.send(miniDataBase)
})

app.get('/test', (req, res, next) => {
   res.send(miniDataBase)
})

const port = 3001;
app.listen(port, () => {
   console.log(`App running on port ${port}...`);
})