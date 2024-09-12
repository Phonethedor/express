const persona = {
    nombre: 'Juan',
    apellido: 'Batista',
    edad: 25,
}

console.log(persona['nombre'])
console.log(persona.apellido)

//Destructuring => Destructuración

const namePerson = persona.nombre
const lastName = persona.apellido
const age = persona.edad

console.log( namePerson, lastName, age)

const { nombre, edad } = persona

console.log(nombre)
console.log(edad)


const array = ['pantufla', 'dinosaurio', 15]

const [ pant, dino, completo ] = array

console.log(pant)
console.log(dino)
console.log(completo)

//Ingresar datos a un objeto a traves de variables

const remitente = 'Alejandro'
const email = 'alejandro@edutecno.com'
const asunto = 'Se quema el bootcamp'
const mensaje = 'AIUDA'
const destinatario = 'Alan'

const mensajeFormulario = {
    remitente,
    email,
    asunto,
    mensaje,
    destinatario
}

console.log(mensajeFormulario)