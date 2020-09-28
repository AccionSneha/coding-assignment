const express = require('express');
const userCtrl = require('../controllers/user.controller');
const router = express.Router();

router.route('/')
    // Create a new user
    .post(userCtrl.create)

    // Retrieve all users
    .get(userCtrl.list);

module.exports = router;