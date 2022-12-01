const modelo = require('./../models/recetas');

const controllerRecetas = {
    // LISTAR TABLAS DE RECETAS
    lista: (req, res) => {
        modelo.find({status: 1}).then(response=>{
            res.send(response);
        }).catch(err =>{
            console.log('algo salio mal',err);
            res.status(400).send();
        });
    },
    recetasPorID: (req, res) => {
        //res.send('Lista de ingredientes de recetas');
        modelo.find({id: res.params.id}).then(response=>{
            res.send(response);
        }).catch(err =>{
            console.log('algo salio mal',err);
            res.status(400).send();
        });
    },

    // LISTAR INGREDIENTES

    listaIngredientes: (req, res) => {
        res.send('Lista de ingredientes de recetas');
        modelo.find({ingredientesPrincipales: 1}).then(response=>{
            res.send(response);
        }).catch(err =>{
            console.log('algo salio mal',err);
            res.status(400).send();
        });
    },
    // CREAR NUEVAS RECETAS
    nuevaReceta: (req, res) => {
        const datos = req.body;
        modelo.create(datos).then(respuesta =>{
            console.log('se inserto una nueva receta');
            res.send(respuesta);
        }).catch(err =>{
            res.status(400).send('no se pudo guardar el contacto');
        })
    },

    consultaPorCategoria: (req, res) => {
        const categoria = req.params.categoria;
        res.send('Lista de ' + categoria);
    },
    // ELIMINAR RECETA
    eliminarReceta: (req, res) => {
        const id = req.params.id;
        const status = 2;
        modelo.findOne({_id: id}).then(respuesta=>{
            respuesta.status =2;
            respuesta.save();
            res.send();
        }).catch(err =>{
            res.status(400).send('no se pudo eliminar');
        })
    },
    actualizarRecetaNombre: (req,res)=>{
        const id = req.params.id;
        const nombre= req.body.nombre;
        const ingredientesPrincipales= req.body.ingredientesPrincipales;
        const receta= req.body.receta;
        const procedimiento= req.body.procedimiento;

        modelo.findOne({_id: id}).then(respuesta => {
            respuesta.nombre=nombre;
            respuesta.ingredientesPrincipales=ingredientesPrincipales;
            respuesta.receta=receta;
            respuesta.procedimiento=procedimiento;
            respuesta.save();
        }).catch(err=>{
            res.status(400).send('no se pudo actualizar');
        });
    },
    actualizarRecetaIngredientes: (req,res)=>{
        const id = req.params.id;
        const ingredientes= req.body.ingredientes;
        modelo.findOne({_id: id}).then(respuesta => {
            respuesta.ingredientes=ingredientes;
            respuesta.save();
        }).catch(err=>{
            res.status(400).send('no se pudo actualizar');
        });
    },
    actualizarRecetaCategoria: (req,res)=>{
        const id = req.params.id;
        const categoria= req.body.categoria;
        modelo.findOne({_id: id}).then(respuesta => {
            respuesta.categoria=categoria;
            respuesta.save();
        }).catch(err=>{
            res.status(400).send('no se pudo actualizar');
        });
    },
    actualizarRecetaProcedimiento: (req,res)=>{
        const id = req.params.id;
        const procedimiento= req.body.procedimiento;
        modelo.findOne({_id: id}).then(respuesta => {
            respuesta.procedimiento=procedimiento;
            respuesta.save();
        }).catch(err=>{
            res.status(400).send('no se pudo actualizar');
        });
    }

}


module.exports = controllerRecetas;
