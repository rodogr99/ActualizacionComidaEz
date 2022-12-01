const controllerBusqueda = {
    buscarUsuario: (req, res) => {
        const usuario = req.params.usuario;
        res.send('Informacion de usuario: ' + usuario);
    },

    buscarUsuarioPorId: (req, res) => {
        const id = req.params.id;
        const nombre = req.params.nombre;
        res.send('Informacion de usuario con id: ' + id+' '+ nombre+ "") ;
    },

    buscarReceta: (req, res) => {
        const nombre = req.params.nombre;
        res.send('Informacion receta: ' + nombre);
    },

    buscarRecetaPorCategoria: (req, res) => {
        const categoria = req.params.categoria;
        res.send('Recetas de : ' + categoria);
    },

    buscarRestaurante: (req, res) => {
        const nombre = req.params.nombre;
        res.send('Informacion de restaurante: ' + nombre);
    },

    buscarRestaurantePorCategoria: (req, res) => {
        const categoria = req.params.categoria;
        res.send('Restaurantes de : ' + categoria);
    }

}


module.exports = controllerBusqueda;
