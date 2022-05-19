const express = require('express')
const app = express()
const port = 3003

app.get('/', (req, res) => {
    const a = 4;
    if (a > 5) {
        res.send('Hello World!')
    } else {
        res.send('Hello!')
    }
})

app.get('/users', (req, res) => {
    res.send('Hello, Nastya!!!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
