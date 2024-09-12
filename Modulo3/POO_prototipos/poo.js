/*Pilares de la programación orientada a Objetos POO */

//Abstracción
function Mascota(nombre, edad, vacunas, especie, raza, humano, peso, apodo) {
    this.nombre = nombre
    this.edad = edad
    this.vacunas = vacunas
    this.especie = especie
    this.raza = raza
    this.humano = humano
    this.peso = peso
    this.apodo = apodo

    this.mostrarDetallesMascota = function() {
        return `La mascota se llama ${this.nombre}, es un ${this.especie} ${this.raza} y su compañero/a humano/a es ${this.humano} `
    }
}

const sonic = new Mascota( 'Sonic', 2, 'Al día', 'gato', 'streetMixer', 'Marce', 5, 'Pana Sonic' )


//Encapsulamiento 😱

function CuentaBancariUsuario(nombre, apellido, rut, password, correo) {
    //privadas
    this._nombre = nombre //Asumo por convención que si tengo _ al inicio del nombre que esta es una variable protegida o privada
    this._apellido = apellido
    this._rut = rut
    this._password = password
    this._correo = correo

    //Datos Públicos
    //getters
    this.nombreCompleto = function() {
        return `${this._nombre} ${this._apellido}`
    } 

    this.rut = function() {
        return this._rut
    }

    this.correo = function() {
        return this._correo
    }

    //Setters -> Modifican datos

    this.setNombre = function( nuevoNombre ) {
        try {
            validarString(nuevoNombre)
            this._nombre = nuevoNombre
        } catch (error) {
            console.error('No pudimos modificar el Nombre', error)
            return 'Ocurrio un problema al modificar el nombre'
        }
    }

    this.setApellido = function( nuevoApellido ) {
        try {
            validarString(nuevoApellido);
            this._apellido = nuevoApellido;
        } catch (error) {
            console.error("No pudimos modificar el Apellido", error);
            return "Ocurrio un problema al modificar el Apellido";
        }
    }

    this.password = function( nuevaContrasenia ) {
        try {
            validarString(nuevaContrasenia)
            this._password = nuevaContrasenia
        } catch (error) {
            console.error("No pudimos modificar el Contraseña", error);
            return "Ocurrio un problema al modificar el Contraseña";
        }
    }

    this.correo = function( nuevoCorreo ) {
        try {
            validarString(nuevoCorreo)
            this._correo = nuevoCorreo
        } catch (error) {
            console.error("No pudimos modificar el Correo", error);
            return "Ocurrio un problema al modificar el Correo";
        }
    }   
}

const validarString = (string) => {
    if (!string || typeof string !== "string") {
            throw new Error("No puedes dejar el campo vacio o con otro dato que no sean caracteres");
    }
}

const cuentaAlan = new CuentaBancariUsuario('Alan', 'García', '18569777-0', '123456789', 'aegarmus@gmail.com')

console.log(cuentaAlan.nombreCompleto())
console.log(cuentaAlan.setNombre(5))
console.log(cuentaAlan.nombreCompleto())
console.log('El programa continuo hasta el final')


//Herencia
function Animal(tipo, alimentacion, vertebrado) {
    this._tipo = tipo
    this._alimentacion = alimentacion
    this._vertebrado = vertebrado

}

Animal.prototype.comer = function() {
    return 'El animal esta comiendo'
}

//Esto es de Polimorfismo
Animal.prototype.comunicarse = function() {
    return 'El Animal se comunica'
}

function Mamifero (tipo, alimentacion, vertebrado, especie, desplazamiento, habitat, sonido) {
    Animal.call(this, tipo, alimentacion, vertebrado)
    this._especie = especie
    this._desplazamiento = desplazamiento
    this._habitat = habitat
    this._sonido = sonido
}


Mamifero.prototype = Object.create(Animal.prototype);
Mamifero.prototype.constructor = Mamifero



const ballena = new Mamifero('acuatico', 'plancton', true, 'cetaceo', 'nado', 'oceanos', 'cantos cetaceos');
const perrito = new Mamifero('terrestre', 'omnivoro', true, 'canino', 'camina', 'casita', 'Woof Woof!');

const mamiferos = []

const crearMamifero = (tipo, alimentacion, vertebrado, especie, desplazamiento, habitat) => {
    const mamifero = new Mamifero(tipo, alimentacion, vertebrado, especie, desplazamiento, habitat)
    mamiferos.push(mamifero)
}

const gatito = crearMamifero('terrestre', 'omnivoro', true, 'felino', 'camina', 'casita')

console.log(mamiferos)

mamiferos.forEach(mamifero => console.log(mamifero))

console.log(perrito.comer())

//Polimorfismo:

Mamifero.prototype.comunicarse = function() {
    console.log(`el ${this._especie} hace ${this._sonido}`)
}

perrito.comunicarse()