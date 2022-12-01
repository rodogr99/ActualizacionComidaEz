const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const path = require('path');

const rutasUsuarios = require('./src/routes/usuarios');
const rutasRestaurantes = require('./src/routes/restaurantes');
const rutasRecetas = require('./src/routes/recetas');
const rutasBusqueda = require('./src/routes/busquedas');
app.use(cors());
app.use(express.json());
app.use('/', rutasUsuarios);
app.use('/', rutasRestaurantes);
app.use('/', rutasRecetas);
app.use('/', rutasBusqueda);
app.use('/', express.static(__dirname + '/src/views'));


/*app.get('/', (req, res) => {
    //const url = __dirname + '/src/views';
    //res.sendFile(url);
});*/

//mongodb+srv://iteso2022:ITESO1234@cluster0.jqhyj.mongodb.net/agenda?retryWrites=true&w=majority
const uri = "mongodb+srv://jorgeUser:ITESO1234@cluster0.hs766vv.mongodb.net/RestaurantApi?retryWrites=true&w=majority";
//const uri = "mongodb+srv://RestaurantProyecto:iteso1234@cluster0.d83seud.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri,(err)=>{
    if(!err){
        console.log('se conecto a la base de datos');
        app.listen(port,() => {
            console.log("app is running in port" + port);
        });
    }else{
        console.log('fallo al conectarse la base de datos');
    }    
});
