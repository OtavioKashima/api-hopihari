const express = require('express');
const router = express.Router();
const login = require('../middleware/usuarios.middleware')
const usuarios = require('../controllers/usuarios.controller');
const brinquedoController = require('../controllers/brinquedos.controller');

router.post("/", login.required, usuarios.admin, brinquedoController.cadastrarBrinquedo);

router.get("/area/:areaName", login.required, brinquedoController.getBrinquedosByAreaName);

module.exports = router;