import mongoose from "mongoose";

// 1. Make Schema
const userSchema =  mongoose.Schema({
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
        required:true
    }
})

// 2. Make model
export const userModel =  mongoose.model('userModel',userSchema)