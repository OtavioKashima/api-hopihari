const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller');

router.delete('/:id', usuariosController.deletarUsuario);

router.post('/cadastrar', usuariosController.cadastrarUsuario);

router.put('/:id', usuariosController.atualizarUsuario)

router.post('/login', usuariosController.loginUsuario)
module.exports = router;