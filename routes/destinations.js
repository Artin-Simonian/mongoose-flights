const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

// POST /movies/:id/reviews (create review for a movie)
router.post('/flights/:id/flights', destinationsCtrl.create);

module.exports = router;