let number = 0
const comenzar = () => {
    number = Math.round((Math.random() * 9) + 1)
    console.log(number)
}



const enviar = () => {
    let numero = document.querySelector("#numero").value
    if(numero == number){
        alert("Los numeros coinciden")
    }else if(numero < number){
        alert("El numero ingresado es menor al numero generado")
    } else{
        alert("El numero ingresado es mayor al numero generado")
    }
}