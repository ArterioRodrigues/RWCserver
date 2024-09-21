const express = require('express')
const path = require("path")

const app = express();

app.use(express.static(path.join(__dirname, "../frontend")))

app.use((req, res) => {
    res.status(404)
    res.send('<h1>Error 404: Resource not found</h1>')
})

app.listen(3000, () => {
    console.log('listening at port 3000')
})