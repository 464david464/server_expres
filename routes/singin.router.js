const bcrypt = require('bcrypt');
const express = require('express');
const fs = require('fs');
const path = require('path')
const router = express.Router()
const viewPath = path.join(__dirname + '/../views/');
const usersDAtaPath = path.join(__dirname + '/../data/users.json')



router.use('/', express.static(viewPath + 'singin'))

router.get('/', (req, res) => {
    res.sendFile(viewPath + 'singin/singin.html')
})

router.post('/', (req, res) => {
    const data = req.body;
    const password = data.password
    hashPassword(password)

    
    const hashedPAss = await hashPassword(password);


    console.log('data', data);
    const users = JSON.parse(readJsonData())
    console.log('users', users)
    users.push(data)
    fs.writeFileSync(usersDAtaPath, JSON.stringify(users))

})



async function hashPassword(pass) {
    const hashed = await bcrypt.hash(pass, 10);
    console.log('hashed', hashed);

    return hashed;
}

function readJsonData() {
    const users = fs.readFileSync(usersDAtaPath, 'utf-8');
    
    return users;
}

module.exports = router