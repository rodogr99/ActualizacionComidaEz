const { Schema, model } = require('mongoose');

const schema = new Schema({
    nombre:{
        type: String
    },
    apellido:{
        type: String
    },
    correo:{
        type: String
    },
    contraseña:{
        type: String
    },
    admin:{
        type: Number,
        default:0
    },
    status:{
        type:Number,
        default:1
    }
});

module.exports = model('usuarios',schema);