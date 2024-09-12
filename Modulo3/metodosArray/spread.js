const objeto = {
    nombre: 'Alejandro',
    genero: 'masculino'
}

const objeto2 = objeto

console.log(objeto)
console.log(objeto2)

objeto2.edad = 35

console.log(objeto2)
console.log(objeto)

let nombre = 'Marcela';
let nombre2 = nombre

console.log(nombre)
console.log(nombre2)

nombre2 = 'Vanesa'

console.log(nombre2);

//Spread Operator => Operador de Esparcimiento
const objeto3 = {...objeto}

console.log(objeto3)

objeto3.apellido = 'Beristain'
console.log(objeto3)
console.log(objeto2)
console.log(objeto)


const array1 = [1,2,3]
const array2 = [...array1]

array2[3] = 15

console.log(array1)
console.log(array2)