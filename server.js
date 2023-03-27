const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const fs = require('fs')

const miniDataBase = fs.readFileSync(`${__dirname}/src/js/test.json`)

app.use(express.urlencoded({ extended: false }))
app.use(express.static('src'))
app.use(bodyParser.json());

app.get('/test', (req, res, next) => {
   res.send('Data')
})


app.post('/datapost', (req, res, next) => {

   res.send('hi')
})

const port = 3001;
app.listen(port, () => {
   console.log(`App running on port ${port}...`);
})