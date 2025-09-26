import express, { urlencoded } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express()
const port = 1234
const url = 'mongodb://localhost:27017/sanex'

app.use(express.urlencoded({ extended: false }))
app.use(express.json()); // ✅ add this
app.use(cors());


const userSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

const user = mongoose.model('user', userSchema)

mongoose.connect(url)
    .then(() => { console.log('Connected to database') })
    .catch((err) => console.log(err))


app.post('/api/user', async (req, res) => {
    try {
        const body = req.body
        const newUser = new user({
            firstName: body.fname,
            lastName: body.lname,
            userName: body.uname,
            email: body.mail,
            password:body.pass
        })
        await newUser.save()
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating user', error: err.message });
    }
})

app.get('/api/user' , async(req,res) => {
    const users = await user.find()
    res.json(users)
})


app.listen(port, () => {
    console.log(`App is runnig`)
})