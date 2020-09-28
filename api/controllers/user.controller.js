const _ = require('lodash');
const {
    User,
    UserSchema
} = require('../models/user.model');
const {
    STATUS_CODES
} = require('../../helpers/constants')

/**
 * Create a new user
 * @property {object} req.body
 * @returns {User}
 */
exports.create = async (req, res, next) => {
    try {

        // validate req payload wrt user schema
        const {
            error
        } = UserSchema.validate(req.body);

        if (error) {
            return res.status(STATUS_CODES.BAD_REQUEST).send({
                message: error.message
            })
        }

        const user = new User(req.body);

        // Save user in the database
        const newUser = await user.save();
        return res.json(newUser);

    } catch (error) {
        next(error)
    }
};

/**
 * Get all users list.
 * @returns {User[]}
 */
exports.list = async (req, res, next) => {
    try {
        const userList = await User.find();
        if (!userList.length) {
            return res.status(STATUS_CODES.NOT_FOUND).send({
                message: "No users found"
            })
        }
        res.json(userList);
    } catch (err) {
        next(err);
    }
};