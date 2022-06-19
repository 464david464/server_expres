const express = require('express');
const path = require('path')
const router = express.Router()
const viewPath = path.join(__dirname + '/../views/')

router.use('/', express.static(viewPath + 'students'))

router.get('/', (req, res) => {
    res.sendFile(viewPath + 'students/students.html')
    console.log('hi prom express');
})


module.exports = router