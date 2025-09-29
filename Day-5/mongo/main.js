import express from 'express';
import './mongoConfig.js'
import mongoose from "mongoose";
import { userModel } from './mongoConfig.js';

const app = express()
const port = 1234
const mongoString = "mongodb://localhost:27017/sanex"


//Connecting to mongo
let con = await mongoose.connect(mongoString)
    .then(() => console.log('Mongo Connected'))
    .catch((err) => console.log(err))

app.get('/',async (req,res) => {
    //Adding Mongo data
    const user = new userModel({
        name:'Test',
        username:'test1',
        password:'testpass'
    })
    await user.save()
    res.send('<h1>MongoDb connection</h1>')
})

//Fetching data
app.get('/users' ,async (req,res) => {
    const user = await userModel.find()
    res.json(user)
})

//Find by id
app.get('/users/:id' ,async(req,res) => {
    const user  = await userModel.findById(req.params.id)
    res.json(user)
})

//Update user
app.get('/update' , async(req,res) => {
  let update = await userModel.findOneAndUpdate({username:'test2'},
    {$set:{name:'Devansh'}},
    {new:true}
   )
   res.json(update)
})


app.listen(port,() => {
    console.log(`app running : http://localhost:${port}/`)
})