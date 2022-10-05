const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const UsuarioController = require('../controllers/usuarioController');

router.post('', UsuarioController.create);
router.post('/login', UsuarioController.login);
router.post('/trocarSenha', checkAuth, UsuarioController.trocarSenha);
router.put('/:id', checkAuth, UsuarioController.update);
router.get('', checkAuth, UsuarioController.getAll);
router.get('/:id',checkAuth, UsuarioController.getOne);
router.delete('/:id',checkAuth, UsuarioController.delete);

module.exports = router;