

class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
            this.nombre = nombre,
            this.edad = edad,
            this.dni = dni,
            this.sexo = sexo,
            this.peso = peso,
            this.altura = altura
            this.anioNacimiento = anioNacimiento
    }

    get generacion() {
        return this.mostrarGeneracion()
    }

    get mayoredad(){
        return this.esMayorDeEdad()
    }

    get datos(){
        return this.mostrarDatos()
    }

    mostrarGeneracion() {
        if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
            alert(`La persona pertenece a la Generacion Z y su rasgo caracteristico es irreverencia`)
        } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
            alert(`La persona pertenece a la Generacion Y y su rasgo caracteristico es frustracion`)
        } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
            alert(`La persona pertenece a la Generacion X y su rasgo caracteristico es obsesion por el exito`)
        } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
            alert(`La persona pertenece a la Generacion Baby Boom y su rasgo caracteristico es ambicion`)
        } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
            alert(`La persona pertenece a la Generacion Silent Generation y su rasgo caracteristico es austeridad`)
        }
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            alert("La persona es mayor de edad")
        } else{
            alert("La persona no es mayor de edad")
        }
    }

    mostrarDatos(){
        alert(`${this.nombre}\n
        ${this.edad}\n
        ${this.dni}\n
        ${this.sexo}\n
        ${this.peso}\n
        ${this.altura}\n
        ${this.anioNacimiento}`)
    }

}

const mostrarGeneracion = () => {
    let nombre = document.querySelector("#nombre").value
    let edad = document.querySelector("#edad").value
    let dni = document.querySelector("#dni").value
    let genero = document.querySelector("#sexo").value
    let peso = document.querySelector("#peso").value
    let altura = document.querySelector("#altura").value
    let nacimiento = document.querySelector("#nacimiento").value

    let persona = new Persona(nombre, edad, dni, genero, peso, altura, nacimiento)
    persona.generacion
}

const esMayorEdad = () => {
    let nombre = document.querySelector("#nombre").value
    let edad = document.querySelector("#edad").value
    let dni = document.querySelector("#dni").value
    let genero = document.querySelector("#sexo").value
    let peso = document.querySelector("#peso").value
    let altura = document.querySelector("#altura").value
    let nacimiento = document.querySelector("#nacimiento").value

    let persona = new Persona(nombre, edad, dni, genero, peso, altura, nacimiento)
    persona.mayoredad
}

const mostrarDatos = () => {
    let nombre = document.querySelector("#nombre").value
    let edad = document.querySelector("#edad").value
    let dni = document.querySelector("#dni").value
    let genero = document.querySelector("#sexo").value
    let peso = document.querySelector("#peso").value
    let altura = document.querySelector("#altura").value
    let nacimiento = document.querySelector("#nacimiento").value

    let persona = new Persona(nombre, edad, dni, genero, peso, altura, nacimiento)
    persona.datos
}