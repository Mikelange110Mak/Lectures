const express = require('express')
const app = express();
const bodyParser = require('body-parser')

app.use(express.urlencoded({ extended: false }))
app.use(express.static('src'))
app.use(bodyParser.json());

app.get('/test', (req, res, next) => {
   res.send('Data')
})

app.post('/datapost', (req, res, next) => {
   let name = req.body.formName
   let phone = req.body.formPhone
   let obj = { name, phone }
   console.log(obj);
   res.send(obj)
})

const port = 3001;
app.listen(port, () => {
   console.log(`App running on port ${port}...`);
})