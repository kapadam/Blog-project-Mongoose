const express = require('express');
const bollywoodApi = require('../Api/Bollywood');

const router = express.Router();
router.post('/bollywood', bollywoodApi.bollywoodDataInsertToDb);
router.get('/bollywood', bollywoodApi.bollywoodDataFindFromDb);

module.exports = router;