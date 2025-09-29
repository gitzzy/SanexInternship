const cookieParser = require('cookie-parser');
const express = require('express')
const app = express()
const port = 1234;
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

app.use(cookieParser())

//Sending cookie
app.get('/' , (req,res) => {
    //Setting cookie
    res.cookie('name','Devansh')
    res.send('<h1>app is runing</h1>')
    //reading the cookie
    console.log(req.cookies)
})

//bcrypt part
app.get('/bcrypt' , async(req,res) => {
    const pass = 'password'
   await bcrypt.genSalt(10,(err,salt) => {
        bcrypt.hash(pass,salt,(err,hash) => {
            console.log(hash)
        })
        
    })
})


//jwt part
// npm i jsonwebtoken
app.get('/jwt' , (req,res) => {
   let token =  jwt.sign({mail:'tyagi@mail.com'},'secret')
   res.cookie('token',token)
   console.log(token)
   res.send('jwt')
})

app.get('/jwtv',(req,res) => {
    let data = jwt.verify(req.cookies.token,'secret')
    console.log(data)
    res.send('jwt verified')
})



app.listen(port,() => {
    console.log(`App is running : http://localhost:${port}/bcrypt`)
})