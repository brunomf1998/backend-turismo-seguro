const { Router } = require('express');
const controladorEstablecimientos = require('../controllers/establecimientos.controller');

const router = Router();

router.post('/', controladorEstablecimientos.crearEstablecimiento);
router.get('/', controladorEstablecimientos.obtenerEstablecimientos);
router.get('/:establecimientoId', controladorEstablecimientos.obtenerEstablecimientoPorId);
//router.put('/:userId', controladorComentarios.updateUserById);
//router.delete('/:userId', controladorComentarios.deleteUserById);

module.exports = router;