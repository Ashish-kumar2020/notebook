const connectToMongo = require('./db');
const express = require('express')
const app = express()
const port = 3000

app.use(express.json());  // Middleware
// Available Routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));


app.listen(port, () => {
  console.log(`Server is up and running properly at http://localhost:${port}`)
})
connectToMongo();