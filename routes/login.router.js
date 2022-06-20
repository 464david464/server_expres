const express = require('express');
const path = require('path')
const router = express.Router()
const viewPath = path.join(__dirname + '/../views/')

router.use('/', express.static(viewPath + 'login'))

router.get('/', (req, res) => {
    res.sendFile(viewPath + 'login/login.html')
})

module.exports = router