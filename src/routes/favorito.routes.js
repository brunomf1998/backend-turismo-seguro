const { Router } = require('express');
const controladorFavoritos = require('../controllers/favoritos.controller');

const router = Router();

router.post('/', controladorFavoritos.crearFavorito);
router.get('/', controladorFavoritos.obtenerFavoritos);
router.get('/:favoritoId', controladorFavoritos.obtenerFavoritoPorId);
router.put('/:favoritoId', controladorFavoritos.actualizarFavoritoPorId);
router.delete('/:favoritoId', controladorFavoritos.eliminarFavoritoPorId);
router.get('/usuario/:usuarioId', controladorFavoritos.obtenerFavoritosPorUsuario);

module.exports = router;