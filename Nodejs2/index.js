const express = require('express')
import configViewEngine from './src/configs/viewEngine'
//import express from 'express'
const app = express()
const port = 3000

configViewEngine(app);
app.get('/', (req, res) => {
 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})