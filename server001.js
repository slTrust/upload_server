const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('hello')
})

app.post('/upload',(req,res)=>{
    res.send('here')
})

app.listen(3000)