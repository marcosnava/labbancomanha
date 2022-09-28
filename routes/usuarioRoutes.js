const express = require('express');
const router = express.Router();

const UsuarioController = require('../controllers/usuarioController');

router.post('', UsuarioController.create);
router.post('/login', UsuarioController.login);
router.post('/trocarSenha', UsuarioController.trocarSenha);
router.put('/:id', UsuarioController.update);
router.get('', UsuarioController.getAll);
router.get('/:id', UsuarioController.getOne);
router.delete('/:id', UsuarioController.delete);

module.exports = router;