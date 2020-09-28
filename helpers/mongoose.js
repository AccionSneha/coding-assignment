const {
    url
} = require('../config/database');
const mongoose = require('mongoose');

const connect = async () => {
    try {
        // Connecting to the database
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`[MongoDB] connected to database at ${url}`);

    } catch (e) {
        console.log('[MongoDB] Error connecting to database');
        throw e
    }
}

module.exports = {
    connect
}