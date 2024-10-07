class Animal {
    #nombre;
    #edad;

    constructor(nombre, edad) {
        this.#nombre = nombre;
        this.#edad = edad;
    }
    getNombre() {
        return this.#nombre;
    }
    getEdad() {
        return this.#edad;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }
    setEdad(edad) {
        this.#edad = edad;
    }

    comer() {
        return `${this.#nombre} está comiendo`;
    }
}

class Perro extends Animal {
    #raza;

    constructor(nombre, edad, raza) {
        super(nombre, edad);
        this.#raza = raza;
    }

    get raza() {
        return this.#raza;
    }

    set raza(raza) {
        if (typeof raza === 'string' && raza.length > 0) {
            this.#raza = raza;
        } else {
            console.error('La nueva raza contiene errores');
        }
    }

    getAllProperties() {
        return {
            nombre: this.getNombre(),
            edad: this.getEdad(),
            raza: this.#raza}
    }

    ladrar() {
        return `${this.nombre} está ladrando`;
    }
}

const auri = new Perro('Auri', 6, 'Quiltro');
const bast = new Perro('Bast', 5, 'Quiltro');

console.log(auri.getAllProperties());