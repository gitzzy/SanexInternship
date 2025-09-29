import mongoose from "mongoose";
const mongo = mongoose

const url = 'mongodb://localhost:27017/auth'

mongo.connect(url)

const userScema = mongo.Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
})

export const userModel = mongo.model('userModel',userScema)

