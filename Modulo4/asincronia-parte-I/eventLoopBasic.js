console.log('Primera Tarea')

setTimeout(() => { //Representar el trabajo de un Callback
    console.log('Segunda Tarea')
}, 3000)

Promise.resolve().then(() => { //Promesa
    console.log('Tercera Tarea')
})

console.log('Cuarta Tarea')