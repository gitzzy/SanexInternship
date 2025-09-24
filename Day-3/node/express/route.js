const exp = require('express')
const app = exp()
const port = 3000

app.get('/' , (req,res) => {
    res.send('<h1>Home</h1>')
})

app.get('/greet/:name',(req,res) => {
    res.send(`<h1>Hello ${req.params.name} </h1>`)
})

app.listen(port,() => {
    console.log(`Server running on http://localhost:${port}`);
})