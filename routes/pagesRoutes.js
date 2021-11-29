const express = require('express');
const router = express.Router();
const controllerPages = require('../controller/controllerPages')

router.get('/', controllerPages.home);
router.get('/login', controllerPages.login);
router.get('/register', controllerPages.register);
router.get('/carrito', controllerPages.carrito);
router.get('/contacto', (req, res) => res.sendFile(path.join(__dirname,'public/views/pages/contacto.html')));
router.get('/productDetail', (req, res) => res.sendFile(path.join(__dirname,'public/views/pages/productDetail.html')));



module.exports = router;