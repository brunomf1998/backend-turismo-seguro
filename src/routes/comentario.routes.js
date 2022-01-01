const { Router } = require('express');
const controladorComentarios = require('../controllers/comentarios.controller');

const router = Router();

router.post('/', controladorComentarios.crearComentario);
router.get('/', controladorComentarios.obtenerComentarios);
router.get('/:comentarioId', controladorComentarios.obtenerComentarioPorId);
router.put('/:comentarioId', controladorComentarios.actualizarComentarioPorId);
router.delete('/:comentarioId', controladorComentarios.eliminarComentarioPorId);
router.get('/usuario/:usuarioId', controladorComentarios.obtenerComentariosPorUsuario);

module.exports = router;