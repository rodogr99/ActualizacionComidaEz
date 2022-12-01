document.addEventListener('DOMContentLoaded',()=>{
    axios.get('http://localhost:3000/usuarios').then(respuesta=>{
        console.log(respuesta.data);
        const usuarios = respuesta.data;
        const contenedor = document.getElementById('usuarios');

        usuarios.forEach(elemento => {
             const nombre = elemento.nombre;
             const fila = document.createElement('div');
             fila.innerText = nombre;
             contenedor.append(fila);
         });
    });

});