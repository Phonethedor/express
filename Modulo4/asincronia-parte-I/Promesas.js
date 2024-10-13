//Promesas 2015 ES6

const saludarConPromesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(0 === 0) {
                resolve('Saludos!')
            } else {
                reject('Lo Siento no pudimos cumplir la promesa :c')
            }
        }, 3000)
    })
}
 saludarConPromesa()
    .then((message) => console.log(message)) // => Se ejecuta cuando la promesa sale bien :D (Agarra lo que esta en el Resolve)
    .catch((error) => console.log(error)) // => Se ejecuta cuado la promesa male sal :c (Agarra lo que este en el Reject)
    .finally(() => console.log('Finalizamos la Promes para bien o para mal')) // Es opcional


/* 
La Promesas tienen 3 estados

1. Promesas Pendientes o Promise Pendient => La promesa no dio resultados en el momento que esperaba encontrarlos
2. Reject o Rechazo => La promesa no se pudo cumplir como se esperaba (Se relaciona con el Reject y el manejo de errores)
3. Fullfill o Logrado => La promesa se pudo cumplir como se esperaba (Se relaciona con el Resolve)

*/

const sumarDosNumerosConPromesas = (numero1, numero2) => {
    return new Promise(( resolve, reject ) => {
        setTimeout(() => {
            if(Number(numero1) && Number(numero2)) {
                resolve(Number(numero1) + Number(numero2))
            } else {
                reject('No podemos sumar algo que no sean números')
            }
        }, 2000)
    })
}
 
let numero1 = 5
let numero2 = "a"

/* sumarDosNumerosConPromesas(numero1, numero2)
    .then((resultado) => console.log(`La suma entre ${numero1} y ${numero2} es igual a ${resultado}`) )
    .catch((error) => console.log('Error: ', error) ) */


Promise.all([saludarConPromesa(), sumarDosNumerosConPromesas(numero1, numero2)])
    .then(([saludo, resultado]) => {
        console.log(`Hola, completamos ambas promesas, les mando muchos ${saludo} y te menciono que la suma de ${numero1} y ${numero2} es ${resultado}`)
    })
    .catch((error) => {
        console.error('Error: ', error)
    }) 


Promise.race([saludarConPromesa(), sumarDosNumerosConPromesas(numero1, numero2)])
    .then((resultadoRace) => console.log(`El primer resultado en llegar fue: ${resultadoRace}`))
    .then()
    .then()
    .then()
    .catch((error) => console.error('Error: ', error))


Promise.any() // => Le mando como argunento un arreglo de promesas y devuelve el comportamiento que nosotros queramos
            // aL momento de que se resuelva cualquiera de las promesas

Promise.allSettled() // => Funciona similar a Promise.all pero devuelve un comportamiento cuando se completan TODAS las promesas
                    // evaluadas, ya sea fullfill o rejected

Promise.reject() // => Devuelve una promesa en caso que NO se cumpla una condición dada
Promise.resolve() // => Devuelve una promesa en caso que se cumpla una condición dada