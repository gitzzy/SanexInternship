const exp = require('express')
const data = require('./MOCK_DATA.json')
const app = exp()
const port = 3000

app.get('/' , (req,res) => {
    res.send('Working')
})

app.get('/api/users',(req,res) => {
    return res.json(data)
})

app.get('/users',(req,res) => {
    const html = `
    <ul>
        ${data.map(user => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `
    return res.send(html)
})

app.get('/api/users/:id' ,(req,res) => {
    let id = Number(req.params.id)
    const user = data.find((user) => user.id === id)
    return res.json(user)
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})