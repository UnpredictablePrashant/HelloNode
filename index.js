const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send('Hello World!')
})

app.get('/namaste',(req,res)=>{
    res.send("Namaste!")
})

app.get('/hola',(req,res)=>{
    res.send("Hola!")
})

app.listen(3000)
