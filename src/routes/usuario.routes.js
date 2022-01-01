const { Router } = require('express');
const controladorUsuarios = require('../controllers/usuarios.controller');

const router = Router();

router.post('/', controladorUsuarios.crearUsuario);
router.get('/', controladorUsuarios.obtenerUsuarios);
router.get('/:usuarioId', controladorUsuarios.obtenerUsuarioPorId);
//router.put('/:userId', controladorUsuarios.updateUserById);
//router.delete('/:userId', controladorUsuarios.deleteUserById);

router.post('/login', controladorUsuarios.logIn);

module.exports = router;