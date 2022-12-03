
function form2json(formID) {
    // Obtenemos el objeto DOM del formulario
    var form = document.getElementById(formID);

    // Obtenemos un objeto que contiene los campos del formulario, usando la función de Jquery "serializeArray" y luego los transformo en un objeto en el que los atributos "name" de cada campo del formulario pasan a ser las claves del objeto; y los "value" los valores.
    var serializedForm = $(form).serializeArray().reduce(function(result, field){
        if (result.hasOwnProperty(field.name)) {
            if (Array.isArray(result[field.name])) {
                result[field.name].push(field.value);
            } else {
                result[field.name] = [result[field.name], field.value];
            }
        } else {
            result[field.name] = field.value;
        }
        return result;
    }, {});

    // Transformo los campos a una cadena JSON
    var jsonForm = JSON.stringify(serializedForm);

    // Agrego el tipo MIME del archivo y la codificación de caracteres
    //var jsonFileData = 'data:application/json;charset=UTF-8,';

    // Codifico la cadena JSON con la función "encodeURIComponent" para que pueda ser parte del atributo "href" y luego lo agrego.
    //jsonFileData += encodeURIComponent(jsonForm);

    // Devuelvo el resultado
    return jsonForm;
}


document.addEventListener('DOMContentLoaded',()=>{
    //init_form();
    const form = document.getElementById('nuevoUsuario');
    form.addEventListener('submit', (event) => {

        event.preventDefault();
        const jsonUser = form2json('nuevoUsuario');
        console.log(jsonUser);
        const data = JSON.parse(jsonUser);
        console.log(data)
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.post('https://daswo2022-equipo7.herokuapp.com/usuarios/nuevo', data).then(response =>
        console.log('success',response)
       ).catch(err=>
        console.log(err)
       );
       setTimeout(10);
       $('#modalRegistro').modal('toggle');
    });
   
});