

function reloj() {
    let date = new Date()
    let dia = date.getDate()
    let diaSemana = date.getDay()
    ///////////////////Agregar dia de la semana y numero del mes/////////////////////////////

    document.querySelector("#diaSemana").innerHTML = dia
    switch (diaSemana) {
        case 1:
            diaSemana = "Lunes"
            break;
        case 2:
            diaSemana = "Martes"
            break;
        case 3:
            diaSemana = "Miercoles"
            break;
        case 4:
            diaSemana = "Jueves"
            break;
        case 5:
            diaSemana = "Viernes"
            break;
        case 6:
            diaSemana = "Sabado"
            break;
        case 7:
            diaSemana = "Domingo"
            break;

    }
    document.querySelector("#dia").innerHTML = diaSemana


    /////////////////////////////////////////////////////////////////////////////////////////
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

window.setInterval(reloj, 1000)

