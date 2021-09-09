const express = require('express')
const router = express.Router()
const messageTemplateCopy = require('../modules/MessageModel')

router.post('/sendmessage', (request, response) => {
    const message = new messageTemplateCopy({
        sender:request.body.sender,
        fullName:request.body.fullName,
        email:request.body.email,
        phone:request.body.phone,
    })
    message.save()
    .then(data=>{
        response.json(data);
    })
    .catch(error => {
        response.json(error)
    })
})

module.exports = router