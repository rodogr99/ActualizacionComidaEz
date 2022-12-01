const router = require('express').Router();

const controller = require('./../controllers/usuarios');

router.get('/usuarios', controller.lista);

router.get('/usuarios:id', controller.consultaPorID);

router.get('/usuarios/isadmin:id', controller.consultaAdmin);

router.get('/usuarios/admins', controller.listaAdmins);

router.get('/usuarios/noadmins', controller.listaNoAdmins);

router.post('/usuarios/nuevo', controller.nuevoUsuario);

//router.post('/usuarios/login', controller.login);

router.delete('/usuarios/eliminar:id',controller.eliminarUsuario);

router.put('/usuarios/actualizar/nombre:id',controller.actualizarUsuarioNombre);

router.put('/usuarios/actualizar/correo:id',controller.actualizarUsuarioCorreo);

router.put('/usuarios/actualizar/usuario:id',controller.actualizarUsuarioUsuario);









module.exports = router;