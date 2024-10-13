const resolverDespuesTresSegundos = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Number(numero)){
                resolve(numero * 2)
            } else {
                reject('El valor ingresado no es un número')
            }
        }, 3000)
    })
}

const resolverDespuesDosSegundos = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numero * 3)
        }, 2000)
    })
}

const sumarNumerosAsincronos = async(numeroTres) => {
    try {
        const numeroUno = await resolverDespuesTresSegundos('a');
        const numeroCuatro = 5
        const numeroDos = await resolverDespuesDosSegundos(10);
    
    
        console.log(numeroUno + numeroDos + numeroTres + numeroCuatro)
        
    } catch (error) {
        console.error(error)
    }
}

sumarNumerosAsincronos(5)

async function restarNumerosAsincronos(numeroTres){
    const numeroUno = await resolverDespuesTresSegundos(20);
    const numeroCuatro = 5
    const numeroDos = await resolverDespuesDosSegundos(20)

    console.log(numeroUno - numeroDos - numeroTres - numeroCuatro)
}

restarNumerosAsincronos(5)