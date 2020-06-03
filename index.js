const express = require('express')
const app = express()
const fs = require('fs')
app.use(express.static(__dirname + '/static'))
app.use((req, res, next) => {
    console.log('User Visited ' + req.path)
    next()
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/html/index.html')
})
app.listen(3000, () => {
    console.log('Ready')
})