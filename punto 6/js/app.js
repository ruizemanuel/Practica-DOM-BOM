let valor = 0
document.querySelector("#contador").innerHTML = "00"

const iniciar = () => {
    id = window.setInterval(decrementar,1000)
}

const reset = () => {
    window.clearInterval(id)
    valor = document.querySelector("#valor").value
    document.querySelector("#contador").innerHTML = valor
}

const pausar = () => {
    window.clearInterval(id)
}

function decrementar(){
    if(valor == 0){
        window.clearInterval(id)
    }else{
        valor--
    }
    document.querySelector("#contador").innerHTML = valor
   
}

const setear = () => {
    valor = document.querySelector("#valor").value
    document.querySelector("#contador").innerHTML = valor
}