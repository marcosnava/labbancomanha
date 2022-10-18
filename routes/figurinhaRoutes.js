const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const FigurinhaController = require('../controllers/figurinhaController');

router.post('', FigurinhaController.create);
router.put('/:id', checkAuth, FigurinhaController.update);
router.get('', checkAuth, FigurinhaController.getAll);
router.get('/:id',checkAuth, FigurinhaController.getOne);
router.delete('/:id',checkAuth, FigurinhaController.delete);

module.exports = router;