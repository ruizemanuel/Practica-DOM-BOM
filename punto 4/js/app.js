

function reloj() {
    let date = new Date()

    let horas = date.getHours()
    let minutos = date.getMinutes()
    let segundos = date.getSeconds()

    let ampm = ""

    minutos = agregarCero(minutos)
    segundos = agregarCero(segundos)

    if (horas >= 12) {
        if (horas === 12) {
            horas = horas + 12
        }
        horas = horas - 12
        ampm = "PM"
    } else {
        if (horas === 0) {
            horas = horas + 12
        }
        ampm = "AM"
    }

    

    document.querySelector("#ampm").innerHTML = ampm
    document.querySelector("#horas").innerHTML = horas
    document.querySelector("#minutos").innerHTML = minutos
    document.querySelector("#segundos").innerHTML = segundos
}

function agregarCero(valor) {
    if (valor < 10) {
        valor = "0" + valor
    }
    return valor
}

window.setInterval(reloj, 500)

