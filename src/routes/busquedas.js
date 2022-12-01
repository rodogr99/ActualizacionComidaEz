const router = require('express').Router();

const controller = require('./../controllers/busquedas');

router.get('/buscar/usuario:usuario', controller.buscarUsuario);

router.get('/buscar/usuario/id:id', controller.buscarUsuarioPorId);

router.get('/buscar/restaurante:nombre', controller.buscarRestaurante);

router.get('/buscar/restaurante/categoria:categoria', controller.buscarRestaurantePorCategoria);

router.get('/buscar/receta:nombre', controller.buscarReceta);

router.get('/buscar/receta/categoria:categoria', controller.buscarRecetaPorCategoria);


module.exports = router;
