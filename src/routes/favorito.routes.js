const { Router } = require('express');
const controladorFavoritos = require('../controllers/favoritos.controller');

const router = Router();

router.post('/', controladorFavoritos.crearFavorito);
router.get('/', controladorFavoritos.obtenerFavoritos);
router.get('/:favoritoId', controladorFavoritos.obtenerFavoritoPorId);
//router.put('/:userId', controladorComentarios.updateUserById);
//router.delete('/:userId', controladorComentarios.deleteUserById);

module.exports = router;