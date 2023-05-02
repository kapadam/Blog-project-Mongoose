const express = require('express');
const fitnessApi = require('../Api/Fitness');

const router = express.Router();
router.post('/fitness', fitnessApi.fitnessDataInsertToDb);
router.get('/fitness', fitnessApi.fitnessDataFindFromDb);

module.exports = router;