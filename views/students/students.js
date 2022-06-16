const express = require('express');
const path = require('path')
const router = express.Router()
const viewPath = path.join(__dirname + '/../views/')

router.use('/students', express.static(viewPath + 'students'));

router.get('/students', (req, res) => {
    res.sendFile(viewPath + 'students/students.html')
})

module.exports = router;