const massagens = require('../controller/massagens.controller');
const router = require('express').Router();

router.get('/', massagens.getMassagens);
router.post('/', massagens.createMassagem);

module.exports = router;