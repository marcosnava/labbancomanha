const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const TipoController = require('../controllers/tipoController');

router.post('', TipoController.create);
router.put('/:id', checkAuth, TipoController.update);
router.get('', checkAuth, TipoController.getAll);
router.get('/:id',checkAuth, TipoController.getOne);
router.delete('/:id',checkAuth, TipoController.delete);

module.exports = router;