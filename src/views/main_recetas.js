// Funcion para obtener todos los usuarios

function obtenerRecetas() {
    console.log('1111111111111111111');
    makeRequest('http://localhost:3000/recetas', 'GET', null, 
    (value) => {
        console.log('Ok');
        console.log(value);
        mostrarRecetas(value);
    }, (err) => {
        console.log('Error');
        console.log(err);
    });
};

//Funcion que invoca el card y obtiene los datos completos de cada usuario
function mostrarRecetas(recetas){
    console.log('222222222222222');
    let recetasprube=[];
    recetas.forEach(receta => {
        let id=receta._id;
        makeRequest(`https://localhost:3000/recetas/id${id}`, 'GET', null, null,
        (value)=>{
            recetasprube.push(value);
        },(err)=>{
            console.log('Error');
            console.log(err);
        });
    });
    changePage(recetasprube);
};

function changePage(recetas)
{
    console.log('recetas: '+ recetas);

    let lista = document.getElementById("content");

    lista.innerHTML = "";

    for (var i = 0; i < recetas.length - 3; i += 3) {
        console.log('Holaaaaaaaaaaaaaaa');
        if (recetas[i]!=undefined){
        //let id=recetas[i]._id;
        lista.innerHTML += 
        `<div class="title-cards"></div>
        <div class="container-card">
        <div class="card">
        <figure>
            <img src="${recetas[i].imgUrl}">
        </figure>
        <div class="contenido-card">
            <h3>${recetas[i].nombre}</h3>
            <p>${recetas[i].descripcion}</p>
            <a href="#">Leer Más</a>
        </div>
        </div>

        <div class="card">
        <figure>
            <img src="${recetas[i+1].imgUrl}">
        </figure>
        <div class="contenido-card">
            <h3>${recetas[i+1].nombre}</h3>
            <p>${recetas[i+1].descripcion}</p>
            <a href="#">Leer Más</a>
        </div>
        </div>

        <div class="card">
        <figure>
            <img src="${recetas[i+2].imgUrl}">
        </figure>
        <div class="contenido-card">
            <h3>${recetas[i+2].nombre}</h3>
            <p>${recetas[i+2].descripcion}</p>
            <a href="#">Leer Más</a>
        </div>
        </div>
        </div>`;
        }
    }
};

obtenerRecetas();