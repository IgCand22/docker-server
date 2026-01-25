const clientes = require("../controller/clientes.controller");
const router = require('express').Router();

router.get('/', clientes.getCliente);
router.post('/', clientes.createCliente);

module.exports = router;