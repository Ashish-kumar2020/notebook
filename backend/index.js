const connectToMongo = require('./db');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('!')
})

app.listen(port, () => {
  console.log(`Server is up and running properly at http://localhost:${port}`)
})
connectToMongo();