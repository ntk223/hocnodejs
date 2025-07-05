import express from 'express'

const app = express()

const hostname = 'localhost'

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, hostname, () => {
    console.log("done")
})