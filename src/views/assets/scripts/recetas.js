const $d = document;
const $table = $d.querySelector(".crud-table");
const $form = $d.querySelector(".crud-form");
const $title = $d.querySelector(".crud-title");
const $template = $d.getElementById("crud-template").content;
const $fragement = $d.createDocumentFragment();

const getAll = async () => {
    try {
        let res = await axios.get("https://daswo2022-equipo7.herokuapp.com/recetas")
        let json = await res.data;
        json.forEach(el => {            
            $template.querySelector(".name").textContent = el.nombre;
            $template.querySelector(".ingredientesPrincipales").textContent = el.ingredientesPrincipales;
            $template.querySelector(".receta").textContent = el.receta;
            $template.querySelector(".procedimiento").textContent = el.procedimiento;

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

                let res = await axios("https://daswo2022-equipo7.herokuapp.com/recetas/nueva", options)
                let json = await res.data;

                location.reload();
            } catch (error) {
                
                let message = error.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML("afterend", `Error: ${error.status}: ${message}`);
            }
        } 
    }
})

