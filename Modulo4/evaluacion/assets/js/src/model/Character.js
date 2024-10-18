import { fetchOneCharacter } from "../services/fetchApi.js"

export class Character {
    #name
    #height
    #mass

    constructor(
        name, 
        height, 
        mass
    ) {
        this.#name = name
        this.#height = height
        this.#mass = mass
    }

    get name() {
        return this.#name
    }

    get height() {
        return this.#height
    }

    get mass() {
        return this.#mass
    }

    static async getCharacter(character) {
        try{
        const data = await fetchOneCharacter(character)
        
        const { name, height, mass } = data;

        const newCharacter = new Character(name, height, mass)

        return newCharacter;
        } catch (error) {
            console.error('No pudimos cargar el personaje en la vista', error)
            alert(`No pudimos cargar el personaje en la vista
                Error: ${error}`);
        }
    }

}