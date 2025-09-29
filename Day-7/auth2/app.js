import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { userModel } from './models/user.js';
import {bcrypt} from 'bcrypt'

const app = express();
const port = 1234;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser());

app.get('/', (req,res) => {
    res.render('index');
});

app.post('/create', async (req,res) => {
    let {name,username,password} = req.body;
    
    let user = await userModel.create({
        name,username,password
    });
    res.send(user);
    bcrypt.genSalt(10,)
});

app.listen(port, () => {
    console.log(`App is running : http://localhost:${port}/`);
});
