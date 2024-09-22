function Persona(nombre, apellido, edad){
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;

    //getters
    this.nombre = function(){
        return this._nombre;
    }

    this.apellido = function(){
        return this._apellido
    }

    this.edad = function(){
        return this._edad
    }

    this.nombreCompleto = function(){
        return `${this._nombre} ${this._apellido}`
    }

    //setters
    this.setNombre = function(nombre){
        this._nombre = nombre;
    }

    this.setApellido = function(apellido){
        this._apellido = apellido
    }

    this.setEdad = function(edad){
        this._edad = edad;
    }

}

const testeo1 = new Persona("Alvaro", "Castillo", 33);
const testeo2 = new Persona("Rayen", "San Martin", 33);

let lista = [];

lista.push(testeo1);
lista.push(testeo2);

console.log(lista.find((persona) => {
    if (persona.nombre() === "Alvaro") {
        return persona;
    }
}).nombreCompleto());