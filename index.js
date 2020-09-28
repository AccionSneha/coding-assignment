const Mongoose = require('./helpers/mongoose')
const app = require('./config/express');
const port = process.env.PORT || 5000;

// Connect to mongo database
Mongoose.connect();

app.get('/', (req, res, next) => {
    res.status(200).send(`This is default API path.`)
})

app.listen(port, () => {
    console.info(`Server listening on port ${port}`);
});

module.exports = app;