const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller');
const login = require('../middleware/usuarios.middleware');

router.delete('/:id', usuariosController.deletarUsuario);

router.post('/cadastrar', usuariosController.cadastrarUsuario);

router.put('/', login.required, usuariosController.atualizarUsuario)

router.post('/login', usuariosController.loginUsuario)
module.exports = router;