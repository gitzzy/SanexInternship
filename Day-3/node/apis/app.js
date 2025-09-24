const exp = require('express')
const data = require('./MOCK_DATA.json')
const app = exp()
const port = 3000

app.get('/users',(req,res) => {
    return res.json(data)
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})