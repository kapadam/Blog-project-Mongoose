const express = require('express');
const foodApi = require('../Api/Hollywood');

const router = express.Router();
router.post('/hollywood', foodApi.hollywoodDataInsertToDb);
router.get('/hollywood', foodApi.hollywoodDataFindFromDb);

module.exports = router;