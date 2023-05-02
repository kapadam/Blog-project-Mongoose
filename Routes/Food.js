const express = require('express');
const foodApi = require('../Api/Food');

const router = express.Router();
router.post('/food', foodApi.foodDataInsertToDb);
router.get('/food', foodApi.foodDataFindFromDb);

module.exports = router;