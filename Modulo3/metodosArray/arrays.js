/*Métodos de Array */

/*Métodos Mutadores => Los que modifican el Array Original*/ //Aqui solo mantengo un dato

const frutas = ['Manzana', 'Pera', 'Platanos', 'Chirimoyas', 'Sandias', 'Melones'];

//Push() ⭐ => Agrega un Elemento al final del array -> Recordar el Pushear
//frutas.push('kiwi')

//Pop() => Quita el ultimo elemento del array -> Lo contrario a Push 
/* const ultimaFruta = frutas.pop() //Si guardo en una variable el resultado de Pop Me devuelve el elemento que quite
console.log(ultimaFruta); */

//Shift() ⭐ => Quita el primer elemento del Array
/* const primeraFruta = frutas.shift()
console.log(primeraFruta) */


//Unshift() => Agrega un elemento al inicio del Array
//frutas.unshift('uvas');

//splice() 🌟 => Modifica el arreglo original en un punto que le indique

/* frutas.splice(3, 1) //Primer argumento define posición, segundo argumento cuantos elementos elimino desde la posición

frutas.splice(2,1,'papaya') //Tercer argumento modifica el indice mandado y elimina la cantidad de elementos entregados
console.log(frutas) */

//reverse() ⭐ => Revierte el arreglo original
//frutas.reverse()

//fill() => Modifica el valor de un elemento y de todos los consecuentes segun la posición determinada
/* frutas.fill('palta', 2, 3)
console.log(frutas)
 */

//Sort() ✨ => Ordena los elementos de un array

/* frutas.sort((a,b) => b.localeCompare(a))
console.log(frutas)
const numeros = [7, 5, 6, 4, 1, 10, 45, 30]
numeros.sort((a, b) => b - a) //15 - 23
console.log(numeros) */

/*Métodos de Accesibilidad => Los que no modifican el Array Original => Me duvuelven un nuevo Array casi siempre*/ 
//Aqui por lo menos salgo con dos datos

//concat() => Le entrego dos o más Arrays y me devuelve un NUEVO Array con la concatenación de ambos

const masas = ['tallarines', 'harina', 'pan', 'queque', 'galletas']
const cereales = ['arroz', 'trigo', 'chia', 'quinoa']

const alimentos = cereales.concat(masas)
//console.log(alimentos)


//include() ⭐ => Determina si un arreglo incluye un elemento determinado que busco -> devuelve un booleano
//console.log(masas.includes('galletas'))
//console.log(masas.includes('que'))

//indexOf() ⭐ => Devuelve la posición o indice de un elemento buscado
//console.log(cereales.indexOf('chia'))
//console.log(cereales.indexOf('galletas'))

//join() => Convierte un Array en una cadena de texto conservando el array y devolviendo un string. Uno determina como se separan
const alimentosString = alimentos.join(' ')
//console.log(alimentosString)

//toString() => Lo mismo que Join
//toLocaleString() => Lo mismo que Join pero reconoce caracteres especiales del idioma de la maquina

//slice()🌟 => devuelve una copia superficial de una parte del array
const masasSlice = masas.slice(1, 4)
//console.log(masasSlice)

//find()✨ => Devuelve la primera coincidencia dentro de un array en base a una condición
const numeros = [1, 2, 5, 9, 9, 26, 10, 15, 5]
const resultado = numeros.find((numero) => numero % 3 === 0);
//console.log(resultado)

const tallarin = alimentos.find(alimento => alimento === 'tallarines')
//console.log(tallarin)

const usuarios = [
    {id: 1, nombre: 'juan', edad: 15},
    {id: 2, nombre: 'maria', edad: 30},
    {id: 3, nombre: 'Pedro', edad: 25},
    {id: 4, nombre: 'Gustavo', edad: 17},
    {id: 5, nombre: 'Alejandra', edad: 28},

]

const persona = usuarios
  .sort((a, b) => a.edad - b.edad)
  .find((usuario) => {
    if (usuario.edad > 25) {
      /* console.log(usuario.nombre); */
      return usuario;
    }
  });

//console.log(persona);

//findIndex() ✨ => Busca un elemento a traves de una condición y devuelve su posición o indice, sino encuentra el valor
//                  Devuelve -1

const index = usuarios.findIndex(usuario => usuario.edad === 27)
/* console.log(index)
 */
//findLast() => devuelve la última coincidencia en base a una condición
//numeros.sort((a, b) => a - b)
const lastNumberMinorMax = numeros.findLast(numero => numero < 26)

console.log(lastNumberMinorMax)

//findLastIndex() => devuelve la posición o indice del último elemento que coincida con la condición
const lastIndex = numeros.findLastIndex(numero => numero < 26)
console.log(lastIndex)


//some() 🌟 => comprueba que al menos un elemento del array coincida con una condición => devuelve un booleano
const hasEven = usuarios.some(usuario => usuario.id === 4)
/* console.log(hasEven)
 */


//filter() ✨ => Crea un nuevo Array con los elementos que cumplan la condición entregada
const numerosMenoresDiez = numeros.filter(numero => numero < 10)
/* console.log(numerosMenoresDiez) */

const usuariosMenores = usuarios.filter(usuario =>  usuario.edad <= 27)
/* console.log(usuariosMenores);
 */


//map() ✨✨✨ => Crea un arreglo nuevo con el resultado de aplicar una función a los elementos de un array original

const usuariosEdadCheck = usuarios.map(usuario => {
  if(usuario.edad > 18) {
    return { 
      ...usuario, 
      adulto: true }
  } else {
    return { ...usuario, adulto: false };
  }
})

/* console.log(usuarios)
console.log(usuariosEdadCheck) */

const numerosPares = numeros.map(numero => {
  const pares = []
  if(numero % 2 === 0) {
    return pares.push(numero)
  }

  return pares

})
/* 
console.log(numerosPares) */

//forEach() ✨✨✨ => Ejecuta una tarea por cada elemento del arreglo => NO CONFUNDIR CON MAP

/* numeros.forEach(numero =>console.log(numero * 2))
console.log(numeros) */


//reduce() ✨✨✨ => Recibe un array y devuelve un icono valor a partir de él

const productos = [
  { id: 1, producto: 'manzana', precio: 1200 },
  { id: 2, producto: 'plátano', precio: 1500 },
  { id: 3, producto: 'fresa', precio: 1800 },
  { id: 4, producto: 'papas', precio: 1700},
  { id: 5, producto: 'palta', precio: 2000}
]

const precioTotal = productos.reduce((acumulador, producto) => {
  acumulador += producto.precio // acumulador = acumulador + producto.precio
  //console.log(acumulador)
  return acumulador
}, 0)

//console.log(precioTotal)

const ciudades = [
  "Santiago",
  "Concepción",
  "Temuco",
  "Iquique",
  "Concepción",
  "Talca",
  "Iquique",
  "Temuco",
  "Iquique",
  "Santiago",
  "Concepción",
  "Temuco",
  "Santiago",
  "Concepción",
  "Temuco",
  "Iquique",
  "Concepción",
  "Temuco",
  "Santiago",
  "Concepción",
  "Temuco",
  "Santiago",
  "Concepción",
  "Temuco",
  "Santiago",
  "Temuco",
  "Santiago",
  "Concepción",
  "Temuco",
  "Temuco",
  "Santiago",
  "Concepción",
  "Temuco",
  "Iquique",
  "Concepción",
  "Temuco",
  "Santiago",
  "Concepción",
  "Temuco",
  "Santiago",
];

const numeroDeCiudades = ciudades.reduce((accum, ciudad) => {

    if(accum[ciudad]) { // objeto['propiedad']
      accum[ciudad] += 1
    } else {
      accum[ciudad] = 1
    }
    
    return accum
    
  }, {})
  
  const tareas = [
    { nombre: "regar las plantas", prioridad: "A" },
    { nombre: "comprar el pan", prioridad: "B" },
    { nombre: "enviar e-mails", prioridad: "A" },
    { nombre: "poner la lavadora", prioridad: "C" },
    { nombre: "cargar el movil", prioridad: "B" },
    { nombre: "limpiar la cocina", prioridad: "A" },
  ];
  
  const final = tareas.reduce((acumulador, tarea) => {
/*     console.log({ tarea }); */
    if (!acumulador[tarea.prioridad]) { //accumlador['A'] === acumulador.A
      acumulador[tarea.prioridad] = []; //acumulador['A'] || acumulador.A = []
    }
    acumulador[tarea.prioridad].push(tarea.nombre);
    return acumulador;
  }, {});
  
 /*  console.log({ final }); */
//console.log(numeroDeCiudades)

//toSorted() ✨ => Hace exactamente lo mismo que sort, con la misma sintaxis pero me devuelve una copia del array ordenado

const numbers = [3, 1, 4, 1, 5, 9]
const numerosSorted = numbers.toSorted((a, b) => a - b)
console.log(numbers)


//toReversed() ✨ Lo mismo que reverse pero genera un arreglo nuevo

const numbersReverse = numbers.toReversed()
const reverseSortedNumbers = numerosSorted.toReversed() 
console.log('Arreglo original: ', numbers)
console.log('Arreglo revertido: ', numbersReverse)
console.log('Arreglo ordenado; ',numerosSorted)
console.log('Arreglo ordenado y revertido: ',reverseSortedNumbers);



const matriz = [1,2,[3,4]]
//flat() => "aplana" arrays multidimensionales, devuelve un array nuevo con los elementos del sub-array dentro de un array general
const flattedMatriz = matriz.flat()
console.log(flattedMatriz)

const matrizCompleja = [1, [2, [3, [4, 5]]]]
console.log(matrizCompleja.flat(Infinity))

//flatMap() => aplicar un map (osea transforma un arreglo) y luego lo aplana y devuelve un arreglo nuevo
const arrayNumbers = [1, 2, 3, 4, 5]
const arrayDoubleNumber = arrayNumbers.flatMap(number => [number, number * 2])