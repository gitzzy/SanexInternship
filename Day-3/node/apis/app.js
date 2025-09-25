const exp = require('express')
const data = require('./MOCK_DATA.json')
const fs = require('fs')
const app = exp()
const port = 3000

app.use(exp.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Working')
})

app.get('/api/users', (req, res) => {
    return res.json(data)
})

app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${data.map(user => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `
    return res.send(html)
})

app.get('/api/users/:id', (req, res) => {
    let id = Number(req.params.id)
    const user = data.find((user) => user.id === id)
    return res.json(user)
})

app.route('/api/users/:id')
    
    .get((req, res) => {
        let id = Number(req.params.id)
        const user = data.find((user) => user.id === id)
        return res.json(user)
    })
    .delete((req,res) => {
        let id = Number(req.params.id)
        const userIndex = data.findIndex(u => u.id === id)
        if(userIndex != -1){
            let id = Number(req.params.id)
            const user = data.find((user) => user.id === id)
            data.splice(userIndex , 1)
            fs.writeFile('./MOCK_DATA.json', JSON.stringify(data,null,2), (err, result) => {
                if (err) {
                    console.log('error while adding data')
                }
            })
        } else {
            res.send('No user found')
        }
    })



app.post('/api/users', (req, res) => {
    const body = req.body
    data.push({ ...body, id: data.length + 1 })
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(data), (err, result) => {
        if (err) {
            console.log('error while adding data')
        }
    })
    console.log(req.body)
})


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})