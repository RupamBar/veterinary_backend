const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 7000

const signUpRouter = require("./routes/routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.json({message : 'Hello World!'}))
app.use('/api', signUpRouter)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))