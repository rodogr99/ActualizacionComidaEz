const router = require('express').Router();

const controller = require('./../controllers/recetas');

router.get('/recetas', controller.lista);

router.get('/recetas/id:id', controller.lista);

router.get('/recetas:categoria', controller.consultaPorCategoria);

router.get('/recetas/ingredientes', controller.listaIngredientes);

router.post('/recetas/nueva', controller.nuevaReceta);

router.delete('/recetas/eliminar:id',controller.eliminarReceta);

router.put('/recetas/actualizar:id',controller.actualizarRecetaNombre);

router.put('/recetas/actualizar/ingredientes:id',controller.actualizarRecetaIngredientes);

router.put('/recetas/actualizar/categoria:id',controller.actualizarRecetaCategoria);

router.put('/recetas/actualizar/procedimiento:id',controller.actualizarRecetaProcedimiento);

module.exports = router;
