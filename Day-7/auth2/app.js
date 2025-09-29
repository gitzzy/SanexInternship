import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { userModel } from './models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();
const port = 1234;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/create', async (req, res) => {
    let { name, username, password } = req.body;

    await bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let user = await userModel.create({
                name, username, password:hash
            });
            let token = jwt.sign({username},'secret')
            res.cookie('username',token)
            res.send(user);
        })
    })
});

app.get('/login',(req,res) => {
   res.render('login'); 
})

app.post('/login',async(req,res) => {
   let user = await userModel.findOne({username:req.body.username})
   if (!user) return res.send('something went wrong');

   bcrypt.compare(req.body.password,user.password,(err,result) => {
    if(result){
        res.send('Login success')
    }else{
        res.send('Login failed')
    }
    console.log(result)
   })
})

app.get('/logout' , (req,res) => {
    res.cookie('username','')
    res.redirect('/')
})

app.listen(port, () => {
    console.log(`App is running : http://localhost:${port}/`);
});
