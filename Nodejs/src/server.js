import express from 'express';
import configViewEngine from '../src/configs/viewEngine';
import bodyParser from 'body-parser';
const app = express()               
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Worldd!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})