const { Router } = require('express');
const controladorEstablecimientos = require('../controllers/establecimientos.controller');

const router = Router();

router.post('/', controladorEstablecimientos.crearEstablecimiento);
router.get('/', controladorEstablecimientos.obtenerEstablecimientos);
router.get('/:establecimientoId', controladorEstablecimientos.obtenerEstablecimientoPorId);
router.put('/:establecimientoId', controladorEstablecimientos.actualizarEstablecimientoPorId);
router.delete('/:establecimientoId', controladorEstablecimientos.eliminarEstablecimientoPorId);
router.get('/usuario/:usuarioId', controladorEstablecimientos.obtenerEstablecimientosPorUsuario);

module.exports = router;