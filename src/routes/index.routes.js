const { Router } = require('express');
const rutasUsuario = require('./usuario.routes');
const rutasComentario = require('./comentario.routes');
const rutasEstablecimiento = require('./establecimiento.routes');
const rutasFavorito = require('./favorito.routes');

const router = Router();

router.use('/api/usuarios', rutasUsuario);
router.use('/api/comentarios', rutasComentario);
router.use('/api/establecimientos', rutasEstablecimiento);
router.use('/api/favoritos', rutasFavorito);

module.exports = router;