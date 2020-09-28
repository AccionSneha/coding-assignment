const express = require('express');
const userRoutes = require('./api/routes/user.route');
const router = express.Router();

const initSwagger = require('./helpers/swagger');

router.get('/check-api', (req, res) =>
  res.send('OK')
);

// mount user routes at /user
router.use('/user', userRoutes);

initSwagger(router);

module.exports = router;