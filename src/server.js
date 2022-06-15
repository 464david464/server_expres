const express = require('express');
const path = require('path')
const app = express()
const viewPath = path.join(__dirname + '/../views/')
const homeRouter = require('../routes/home.router')

app.use((req, res, next) => {
    const { url, method } = req
    console.log(`got req from ${url} | ${method}`);
    next()
})

app.use('/', homeRouter)

app.listen(1212, () => {
    console.log('server listening to port: 1212');
})