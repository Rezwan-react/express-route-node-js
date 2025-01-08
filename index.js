const express = require('express')
const user    = require('./user')

const app = express()

app.get('/', (req, res)=>{
    res.send("Hello Rezwan")
})

app.get('/user', (req, res)=>{
    res.send(user)
})

app.post('/login', (req, res)=>{
    console.log(req);
})


app.listen(8000)
