const express = require('express')
const app = express()
const port = 3000

app.get('/api', (req, res) => {
  //simple documentation
    console.log('hi')
  res.send('Hello World!')
})

//documentation
app.post('/api', (req, res) => {
  //normal rate limit 500
  //ui token?

  console.log('hi')
res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})