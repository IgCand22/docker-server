const massagens = require('../controller/massagens.controller');
const router = require('express').Router();

router.get('/massagens', massagens.getMassagens);
router.post('/massagens', massagens.createMassagem);

module.exports = router;