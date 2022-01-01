const { Router } = require('express');
const controladorComentarios = require('../controllers/comentarios.controller');

const router = Router();

router.post('/', controladorComentarios.crearComentario);
router.get('/', controladorComentarios.obtenerComentarios);
router.get('/:comentarioId', controladorComentarios.obtenerComentarioPorId);
//router.put('/:userId', controladorComentarios.updateUserById);
//router.delete('/:userId', controladorComentarios.deleteUserById);
router.get('/usuario/:usuarioId', controladorComentarios.obtenerComentariosPorUsuario);

module.exports = router;