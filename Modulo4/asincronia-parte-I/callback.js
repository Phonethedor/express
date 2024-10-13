console.log('Hola a todos los estudiantes de FS JS')

console.time('Perdón la demora, llegue')

setTimeout(() => console.timeEnd("Perdón la demora, llegue"), 2000); 

setTimeout(() => console.log('Me demore tambien, me p3rd0n4n?'), 4000)

const ejecutarTareaSimple = tarea => console.log(tarea)

const ejecutarTareaCompleja = tarea => {
    console.log(`Empenzando la tarea ${tarea}.......`)

    for(let i=0; i<100000; i++) {
        Math.random() + Math.random() *Math.random() / Math.random() - Math.random()
    }

    console.log(`--->Termine la tarea ${tarea}`)
}

const delegarTareaAlejandro = (tarea, callback, tiempo) => {
    console.log(tarea)
    setTimeout(callback, tiempo)
}

const listaTareas = [
    () => ejecutarTareaSimple('Revisar los contenidos para la clase'),
    () => delegarTareaAlejandro('Busca ejemplos para la clase', () => ejecutarTareaSimple, 2000),
    () => ejecutarTareaCompleja('Planificar la clase'),
    () => delegarTareaAlejandro('Revise planifiación', () => ejecutarTareaCompleja('Revise planifiación'), 10000),
    () => ejecutarTareaCompleja('Realizar la clase'),
    () => delegarTareaAlejandro('Apoyar a los Estudiantes', () => ejecutarTareaCompleja('Apoyar a los Estudiantes'), 5000)
] 

for(const tarea of listaTareas) {
    tarea()
}

//2005

//Callbacks => Una función que se pasa como argumento a otra función


const realizarTarea = (tarea, siguiente, error) => {
    console.log(tarea)
    if(Math.random() < 0.3) {
        error()
    }else {
        setTimeout(siguiente, 1000)
    } 
}

const imprimirMensajeError = (mensaje) => console.log(mensaje)


//Callback Hell
const crearUnaClase = () => {
  realizarTarea(
    "Revisar Contenidos",
    () =>
      realizarTarea(
        "Buscar ejemplos para la clase",
        () =>
          realizarTarea(
            "Planificar Clase",
            () =>
              realizarTarea(
                "Revisar planificación",
                () =>
                  realizarTarea(
                    "Realizar la Clase",
                    () =>
                      realizarTarea(
                        "Apoyar a los estudiantes",
                        () => console.log("¡Vamos que ustedes pueden!"),
                        () =>imprimirMensajeError("Los Alumnos están en llamas")
                      ),
                    () => imprimirMensajeError("Me quedé dormidito uwu")
                  ),
                () => imprimirMensajeError("Mi gata se comió la planificación")
              ),
            () => imprimirMensajeError("No sé lo que estoy haciendo, ¡ayuda!")
          ),
        () => imprimirMensajeError("No encuentro referencias")
      ),
    () => imprimirMensajeError("Coordinación no subió el Programa")
  );
};

crearUnaClase();


Array.map(() => {

})

addEventListener( 'click', () => {

})