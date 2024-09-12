/*Expresiones Regulares (RegEx (Regular Expresion)) Me van a ayudar a validar cadenas de valores*/

//Dos tipos de notación

//Notacion Literal => La más usada
const regex = /patron/

//Contructor RegExp
const patronRegex = new RegExp('patron')


const regexp = /cuchufli/
const texto = 'Quiero unos pulentos cuchufli'

//console.log(regexp.test(texto))

const regexpMatch = texto.match(regexp)
//console.log(regexpMatch) //Devuelve un array con el texto que coincide con el patron sino devuelve un null

//Comprobar que tenemos al menos un digito en la expresión 
//Regex no valida tipos de datos, solo tipo de caracter

const PATRON_NUMERO = /\d/ //=> Esta expresión busca digitos 0-9

const prueba1 = 'Estamos cerca del 18'
const prueba2 = 'Estamos cerca de Fiestas Patrias'

/* console.log(PATRON_NUMERO.test(prueba1))
console.log(PATRON_NUMERO.test(prueba2)) */

const REGEX_TEXTO = /[a-z]/
const REGEX_TEXTO_UP = /[A-Z]/ // La cadena debe contener mayusculas
const REGEX_NOMBRE = /^[A-Z]/ // La cadena debe empezar con mayuscula

const textoPrueba = '123asdsdf123'
const textoPrueba2 = '123456789'

const textoPrueba3 = 'DINOSAURIO'
const nombre = 'Davidson'

/* console.log(REGEX_TEXTO.test(textoPrueba))
console.log(REGEX_TEXTO.test(textoPrueba2))
console.log(REGEX_TEXTO_UP.test(textoPrueba3))
console.log(REGEX_NOMBRE.test(nombre))
 */

//dd/mm/aaaa
//06/09/2024

const PATRON_FECHA = /^\d{2}\/\d{2}\/\d{4}$/
const fecha = '06/09/2024'
const fecha_americana = '2024/09/06'
const fecha_guion = '06-09-2024'

/* console.log("fecha valida: ", PATRON_FECHA.test(fecha));
console.log("fecha americana: ", PATRON_FECHA.test(fecha_americana));
console.log("fecha guión: ", PATRON_FECHA.test(fecha_guion));
 */

const PATRON_FECHA_HARDCORE = /^(0[1-9]|[12][0-9]|3[01])\-(0[1-9]|1[0-2])\-\d{4}$/
                            //Validamos Día                Validamos mes    validamos año

const nuevaFecha = '25-09-1993'
const nuevaFecha2 = '32-09-1993'
const nuevaFecha3 = '25-13-1993'
const nuevaFecha4 = '25/09/1993'

/* console.log('fecha : ',   PATRON_FECHA_HARDCORE.test(nuevaFecha))
console.log('fecha 2 : ', PATRON_FECHA_HARDCORE.test(nuevaFecha2))
console.log('fecha 3 : ', PATRON_FECHA_HARDCORE.test(nuevaFecha3))
console.log('fecha 4 : ', PATRON_FECHA_HARDCORE.test(nuevaFecha4))
 */

//nombre@dominio.com

const REGEX_EMAIL = /^[a-zA-Z0-9._%!+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/

const email = 'aegarmus@gmail.com'
const email2 = 'aegarmus@gmail,cl'
const email3 = 'aegarmus_gmail.com'

/* console.log('email : ', REGEX_EMAIL.test(email))
console.log('email2 : ', REGEX_EMAIL.test(email2))
console.log('email3 : ', REGEX_EMAIL.test(email3)) */


//Validar solo números en una cadena de texto

const REGEX_NUMBER = /^\d+$/

const numbers = '123456'
const numbersAbc = 'asjsd5f4a4f'

/* console.log(REGEX_NUMBER.test(numbers))
console.log(REGEX_NUMBER.test(numbersAbc))
 */

//Validar que un texto completo este en español entre 1 y 256 caracteres

const REGEX_TEST_ES = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ¿?!¡üÜ,.;:()"'-*]{1,256}$/;


//Validar Palabras

const REGEX_TEXT = /[\wáéíóúÁÉÍÓÚñÑüÜ]+(?:-[\wáéíóúÁÉÍÓÚñÑüÜ]+)?/g; //alejandro-beristain

const validarMaximoPalabras = (texto, regex, maxNumber) => {
    const textoValidado = texto.match(regex) || [] //Esto me devuelve el texto comprobado como valido o un null
    return textoValidado.length <= maxNumber
}

const enviarTextoBackend = (texto, regex, maxNumber) => {
    const textoValido = validarMaximoPalabras(texto, regex, maxNumber)
    try {
        if(!textoValido) throw new Error(`El texto no cumple los estandares (máximo ${maxNumber} palabras)`)
        
        console.log('Texto enviado al Backend')
        
    } catch (error) {
        console.error('Error en el proceso de persistencia', error)
        return 'Error en el proceso de persistencia'
    }
}

const textoValido = 'Esto es un texto de menos de 2000 palabras'
const textoNoValido = 'texto '.repeat(2002)
const noTexto = '65498494654'

/* console.log(textoNoValido) */

enviarTextoBackend(textoValido, REGEX_TEXT, 8)
enviarTextoBackend(textoNoValido, REGEX_TEXT, 2500)





//Armar Expresiones regulares y validar los siguientes elementos

//Validae un RUT en dos formatos => sin puntso con guion, con puntos con guion
//Validar a traves de una función que un número de telefono sea chileno (+56)