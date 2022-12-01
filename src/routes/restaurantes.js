const router = require('express').Router();

const controller = require('./../controllers/restaurantes');

router.get('/restaurantes', controller.lista);

router.get('/restaurantes/categoria:categoria', controller.consultaPorCategoria);

router.get('/restaurantes/id:id', controller.consultaPorId);

router.get('/restaurantes/verificado:id', controller.verificado);

router.post('/restaurantes/nuevo', controller.nuevoRestaurante);

router.delete('/restaurantes/eliminar:id',controller.eliminarRestaurante);

router.put('/restaurantes/actualizar/nombre:id',controller.actualizarRestauranteNombre);

router.put('/restaurantes/actualizar/categoria:id',controller.actualizarRestauranteCategoria);

router.put('/restaurantes/actualizar/descripcion:id',controller.actualizarRestauranteDescripcion);




module.exports = router;
