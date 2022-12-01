const { Schema, model } = require('mongoose');

const schema = new Schema({
    nombre:{
        type: String
    },
    categoria:{
        type: String
    },
    descripcion:{
        type: String
    },
    status:{
        type:Number,
        default:1
    }
});

module.exports = model('restaurantes',schema);