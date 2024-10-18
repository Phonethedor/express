import { Character } from "./src/model/Character.js";
import { Components } from "./src/components/Components.js";
import { Render } from "./src/render/Render.js"

try{
    const character = "1"
    const characterData = await Character.getCharacter(character)
    console.log(characterData)
} catch (error) {
    console.error('No pudimos cargar el personaje en la vista', error)
}

// Seccion personajes principales
const mainChar = document.querySelector('#mainChar')
const mainCharContainer = document.querySelector('#allMain')
let mainCharId = 1

// Seccion personajes secundarios
const subChar = document.querySelector('#subChar')
const subCharContainer = document.querySelector('#allSub')
let subCharId = 6

// Seccion personajes terciarios
const thirdChar = document.querySelector('#thirdChar')
const thirdCharContainer = document.querySelector('#allThird')
let thirdCharId = 12

// Funcion para cargar personajes principales
mainChar.addEventListener('mouseleave', async() => {
    if (mainCharId <= 5){
        try {
            const character = mainCharId.toString()
            const characterData = await Character.getCharacter(character)
            const cardCharacter = Components.oneCardCharacter(characterData)

            Render.oneCardCharacter(mainCharContainer, cardCharacter)

            mainCharId += 1
            
        } catch (error) {
            console.error('No pudimos cargar el personaje en la vista', error)
        }
    }
    console.log(mainCharId)
})

// Funcion para cargar personajes secundarios
subChar.addEventListener('mouseleave', async() => {
    if (subCharId <= 11){
        try {
            const character = subCharId.toString()
            const characterData = await Character.getCharacter(character)
            const cardCharacter = Components.oneCardCharacter(characterData)

            Render.oneCardCharacter(subCharContainer, cardCharacter)
            subCharId += 1
            

        } catch (error) {
            console.error('No pudimos cargar el personaje en la vista', error)
        }
    }
    console.log(subCharId)
})

// Funcion para cargar personajes terciarios
thirdChar.addEventListener('mouseleave', async() => {
    if (thirdCharId <= 16){
        try {
            const character = thirdCharId.toString()
            const characterData = await Character.getCharacter(character)
            const cardCharacter = Components.oneCardCharacter(characterData)

            Render.oneCardCharacter(thirdCharContainer, cardCharacter)

            thirdCharId += 1
            
        } catch (error) {
            console.error('No pudimos cargar el personaje en la vista', error)
        }
    }
    console.log(thirdCharId)
})