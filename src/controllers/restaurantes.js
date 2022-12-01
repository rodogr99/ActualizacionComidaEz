const { describe } = require('node:test');
const modelo = require('./../models/restaurantes');

const controllerRestaurantes = {
    lista: (req, res) => {
        modelo.find({status: 1}).then(response=>{
            res.send(response);
        }).catch(err =>{
            console.log('algo salio mal',err);
            res.status(400).send();
        });
    },

    consultaPorCategoria: (req, res) => {
        const categoria = req.params.categoria;
        res.send('Lista de ' + categoria);
    },
    // verificado - "status" -> 0
    verificado: (req, res) => {
        const id = req.params.id;
        res.send('El restaurante con id:  ' + id + ' no esta verificado');
        modelo.find({status: 0}).then(response=>{
            res.send(response);
        }).catch(err =>{
            console.log('algo salio mal',err);
            res.status(400).send();
        });
    },

    consultaPorId:  async (req, res) => {
        res.send('Encontramos id ' + id);
        const id = req.params.id;
        try{
            const contacto = await modelo.findOne({_id: id, status:1});
       
            if(contacto){
                res.send(contacto);
            }else{
                res.status(404).send('no se encontro el contacto');
            }
        }catch
            {
                res.status(400).send('el id no es valido');
            }
        
    },

    nuevoRestaurante: (req, res) => {
        const datos = req.body;
        modelo.create(datos).then(respuesta =>{
            console.log('se inserto un nuevo restaurant');
            res.send(respuesta);
        }).catch(err =>{
            res.status(400).send('no se pudo guardar el contacto');
        })
    },
    // ELIMINAR RESTAURANTE
    eliminarRestaurante: (req, res) => {
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
    actualizarRestauranteNombre: (req,res)=>{
        const id = req.params.id;
        const nombre= req.body.nombre;
        const categoria= req.body.categoria;
        const descripcion= req.body.descripcion;
        modelo.findOne({_id: id}).then(respuesta => {
            respuesta.nombre=nombre;
            respuesta.categoria=categoria;
            respuesta.descripcion=descripcion;
            respuesta.save();
        }).catch(err=>{
            res.status(400).send('no se pudo actualizar');
        });
    },
    actualizarRestauranteCategoria: (req,res)=>{
        const id = req.params.id;
        const categoria= req.body.categoria;
        modelo.findOne({_id: id}).then(respuesta => {
            respuesta.categoria=categoria;
            respuesta.save();
        }).catch(err=>{
            res.status(400).send('no se pudo actualizar');
        });
    },
    actualizarRestauranteDescripcion: (req,res)=>{
        const id = req.params.id;
        const descripcion= req.body.descripcion;
        modelo.findOne({_id: id}).then(respuesta => {
            respuesta.descripcion=descripcion;
            respuesta.save();
        }).catch(err=>{
            res.status(400).send('no se pudo actualizar');
        });
    }

}


module.exports = controllerRestaurantes;
