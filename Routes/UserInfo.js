const express = require('express');
const userInfoApi = require('../Api/UserInfo');

const router = express.Router();
router.post('/userinfo', userInfoApi.userInfoDataInsertToDb);
router.get('/userinfo', userInfoApi.userInfoDataFindFromDb);

module.exports = router;