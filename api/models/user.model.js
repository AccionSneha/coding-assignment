const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const schema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    mobileNumber: String,
}, {
    timestamps: true
});

const User = mongoose.model('users', schema)

// Create joi validation schema
const UserSchema = Joi.object({

    mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/).required(),
    email: Joi.string().email().required(),
    firstName: Joi.string().min(3).max(15).regex(/^[a-zA-Z]+$/).required(),
    lastName: Joi.string().min(3).max(15).regex(/^[a-zA-Z]+$/).required()
});

module.exports = {
    UserSchema,
    User
};
