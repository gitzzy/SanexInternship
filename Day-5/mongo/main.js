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
        name:'Test1',
        username:'test',
        password:'testpass'
    })
    await user.save()
    res.send('<h1>MongoDb connection</h1>')
})



app.listen(port,() => {
    console.log(`app running : http://localhost:${port}/`)
})