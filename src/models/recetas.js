const { Schema, model } = require('mongoose');

const schema = new Schema({
    nombre:{
        type: String
    },
    ingredientesPrincipales:{
        type: String
    },
    categoria:{
        type: String
    },
    procedimiento:{
        type:String
    },
    status:{
        type:Number,
        default:1
    }
});

module.exports = model('recetas',schema);