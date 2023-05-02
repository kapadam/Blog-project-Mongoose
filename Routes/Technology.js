const express = require('express');
const technologyApi = require('../Api/Technology');

const router = express.Router();
router.post('/technology', technologyApi.technologyDataInsertToDb);
router.get('/technology', technologyApi.technologyDataFindFromDb);

module.exports = router;