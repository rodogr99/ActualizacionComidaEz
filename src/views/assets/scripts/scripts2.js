const $d = document;
const $table = $d.querySelector(".crud-table");
const $form = $d.querySelector(".crud-form");
const $title = $d.querySelector(".crud-title");
const $template = $d.getElementById("crud-template").content;
const $fragement = $d.createDocumentFragment();

const getAll = async () => {
    try {
        let res = await axios.get("http://localhost:3000/recetas")
        let json = await res.data;
        json.forEach(el => {            
            $template.querySelector(".name").textContent = el.nombre;
            $template.querySelector(".ingredientesPrincipales").textContent = el.ingredientesPrincipales;
            $template.querySelector(".receta").textContent = el.receta;
            $template.querySelector(".procedimiento").textContent = el.procedimiento;
            $template.querySelector(".edit").dataset.id = el._id;
            $template.querySelector(".edit").dataset.name = el.nombre;
            $template.querySelector(".delete").dataset.id = el._id;

            let $clone = $d.importNode($template, true);

            $fragement.appendChild($clone);
        });

        $table.querySelector("tbody").appendChild($fragement);
    } catch (error) {
        let message = error.statusText || "Ocurrió un error";
        $table.insertAdjacentHTML("afterend", `Error: ${error.status}: ${message}`);
    }
}

$d.addEventListener("DOMContentLoaded", getAll);


$d.addEventListener("submit", async e => {
    if (e.target === $form) {

        e.preventDefault();

        if (!e.target.id.value) {
            try {
                let options = {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json; charset=utf-8"
                    },
                    data: JSON.stringify({
                        nombre: e.target.nombre.value,
                        ingredientesPrincipales: e.target.ingredientesPrincipales.value,
                        receta: e.target.receta.value,
                        procedimiento: e.target.procedimiento.value
                    })
                };

                let res = await axios("http://localhost:3000/recetas/nueva", options)
                let json = await res.data;

                location.reload();
            } catch (error) {
                
                let message = error.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML("afterend", `Error: ${error.status}: ${message}`);
            }
        } else {
            try {
                let options = {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json; charset=utf-8"
                    },
                    data: JSON.stringify({
                        nombre: e.target.nombre.value,
                        ingredientesPrincipales: e.target.ingredientesPrincipales.value,
                        receta: e.target.receta.value,
                        procedimiento: e.target.procedimiento.value
                        
                    })
                };

                let res = await axios(`http://localhost:3000/recetas/actualizar${e.target.id.value}`, options)
                let json = await res.data;

                location.reload();
            } catch (error) {

                let message = error.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML("afterend", `Error: ${error.status}: ${message}`);
                
            }
        }
    }
})

$d.addEventListener("click", async e => {
    if (e.target.matches(".edit")) {
        $title.textContent = "Editar Receta";
        $form.nombre.value = e.target.dataset.nombre;
        $form.ingredientesPrincipales.value = e.target.dataset.ingredientesPrincipales;
        $form.receta.value = e.target.dataset.receta;
        $form.procedimiento.value = e.target.dataset.procedimiento;
        $form.id.value = e.target.dataset.id;
    }

    if (e.target.matches(".delete")){
        let confirmacion = confirm("¿Estás seguro que deseas eliminar el elemnto seleccionado?")
        
        if (confirmacion) {
            try {
                
                let options = {
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json; charset=utf-8"
                    }
                };
              
               let res = await axios(`http://localhost:3000/recetas/eliminar${e.target.dataset.id}`, options)
                let json = await res.data;

                location.reload();
            } catch (error) {
                
                let message = error.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML("afterend", `Error: ${error.status}: ${message}`);
            }
        }
    }
})