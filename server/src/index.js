const express = require('express')
const app = express()
const port = 3000

app.get('/api', (req, res) => {
    console.log('hi')
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})