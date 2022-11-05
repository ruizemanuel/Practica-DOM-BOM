let segundos = 0
let minutos = 0
document.querySelector("#minutos").innerHTML = "00"
document.querySelector("#segundos").innerHTML = "00"

const iniciar = () => {
    cronometro()
    id = window.setInterval(cronometro, 1000)
}

function cronometro(){
    segundos++
    if(segundos < 10){
        segundos = "0" + segundos
    }
    if(segundos > 59){
        segundos = "0" + 0
        minutos++
        if(minutos < 10){
            minutos = "0" + minutos
        }
        document.querySelector("#minutos").innerHTML = minutos
    }
    document.querySelector("#segundos").innerHTML = segundos
    
    
    
}

const pausar = () => {
    clearInterval(id)
}

const reset = () => {
    clearInterval(id)
    segundos = 0
    minutos = 0
    document.querySelector("#minutos").innerHTML = "00"
    document.querySelector("#segundos").innerHTML = "00"
}
