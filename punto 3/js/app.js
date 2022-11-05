let padre = document.querySelector("#padre")



const agregar = () => {
    let tarea = document.querySelector("#tarea").value
    let elemento = document.createElement("p")
    elemento.innerHTML = tarea
    elemento.className = "text-light mt-2"
    padre.appendChild(elemento)
}

const eliminar = () => {
    if(padre.hasChildNodes() && padre.children.length >= 2 ){
        let ultimo = padre.children.length - 1
        padre.removeChild(padre.children[ultimo]);
        
    }
}