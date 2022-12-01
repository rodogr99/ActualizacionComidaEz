const modelo = require('./../models/usuarios');
const bcryptjs = require("bcryptjs");

const controllerUsuarios = {
    lista: (req, res) => {
        modelo.find({status: 1}).then(response=>{
            res.send(response);
        }).catch(err =>{
            console.log('algo salio mal',err);
            res.status(400).send();
        });
    },

    listaAdmins: (req, res) => {
        modelo.find({admin: 1}).then(response=>{
            res.send(response);
        }).catch(err =>{
            console.log('algo salio mal',err);
            res.status(400).send();
        });
    },

    listaNoAdmins: (req, res) => {
        modelo.find({status: 1}).then(response=>{
            res.send(response);
        }).catch(err =>{
            console.log('algo salio mal',err);
            res.status(400).send();
        });
    },

    consultaPorID: async (req, res) => {
       
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

    nuevoUsuario: (req, res) => {
        const data = req.body;
        const contraseña = req.body.contraseña;
        //console.log('Contrasenia: ' + contraseña);
        data.contraseña = bcryptjs.hashSync(contraseña,9);
        //console.log('Hash: ' + data.contraseña);
        //console.log('Datos recibidos por el modal: ' + datos);
        //datos = JSON.stringify(datos);
        //console.log('Datos recibidos por el modal JSON: ' + JSON.stringify(datos));
        modelo.create(data).then(respuesta =>{  
            //console.log('se inserto un nuevo usuario' + nombre + ' Correo: ' + correo);
            res.send(respuesta);
        }).catch(function (error) {
            res.status(400).send('no se pudo guardar el contacto');
            console.log(error);
        });
    },

    /*login: async (req, res) => {
        const correo = req.body.correo;
        const contraseña = req.body.contraseña;
        //console.log('Contrasenia: ' + contraseña);
        data.contraseña = bcryptjs.hashSync(contraseña,9);
        //console.log('Hash: ' + data.contraseña);
        //console.log('Datos recibidos por el modal: ' + datos);
        //datos = JSON.stringify(datos);
        //console.log('Datos recibidos por el modal JSON: ' + JSON.stringify(datos));
        modelo.create(data).then(respuesta =>{  
            //console.log('se inserto un nuevo usuario' + nombre + ' Correo: ' + correo);
            res.send(respuesta);
        }).catch(function (error) {
            res.status(400).send('no se pudo guardar el contacto');
            console.log(error);
        });
    },*/

    consultaAdmin: (req, res) => {
        const id = req.params.id;
        res.send('El usuario ' + id + ' No tiene permisos de administrador');
    },
    // ELIMINAR USUARIO
    eliminarUsuario: (req, res) => {
        const id = req.params.id;
        const status = 2;
        modelo.findOne({_id: id}).then(respuesta=>{
            respuesta.status =2;
            respuesta.save();
            res.send();
        }).catch(err =>{
            res.status(400).send('no se pudo eliminar');
            console.log('Error: ' + err)
        })
    },
    actualizarUsuarioNombre: (req,res)=>{
        const id = req.params.id;
        const nombre= req.body.nombre;
        const apellido= req.body.apellido;
        const correo= req.body.correo;
        const contraseña= req.body.contraseña;
        modelo.findOne({_id: id}).then(respuesta => {
            respuesta.nombre=nombre;
            respuesta.apellido=apellido;
            respuesta.correo=correo;
            respuesta.contraseña=contraseña;
            respuesta.save();
        }).catch(err=>{
            res.status(400).send('no se pudo actualizar');
        });
    },
    actualizarUsuarioCorreo: (req,res)=>{
        const id = req.params.id;
        const correo= req.body.correo;
        modelo.findOne({_id: id}).then(respuesta => {
            respuesta.correo=correo;
            respuesta.save();
        }).catch(err=>{
            res.status(400).send('no se pudo actualizar');
        });
    },
    actualizarUsuarioUsuario: (req,res)=>{
        const id = req.params.id;
        const usuario= req.body.usuario;
        modelo.findOne({_id: id}).then(respuesta => {
            respuesta.usuario=usuario;
            respuesta.save();
        }).catch(err=>{
            res.status(400).send('no se pudo actualizar');
        });
    }
    
}


module.exports = controllerUsuarios;