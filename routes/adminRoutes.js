const express = require('express');
const router = express.Router();
const controllerAdmin = require('../controller/controllerAdmin')

router.get('/', controllerAdmin.index);
router.get('/stock', controllerAdmin.stock);
router.get('/productAdd', controllerAdmin.addProduct);

module.exports = router;