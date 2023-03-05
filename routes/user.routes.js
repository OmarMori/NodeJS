const express = require('express')
const router = express.Router()
const userController=require("../controllers/user.controller")


router.route(prefix, "/").get(userController.getUsers)
    .post(userController.addUsers)



module.exports = router  