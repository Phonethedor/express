const BASE_URL = "https://swapi.dev/api/people/"

export const fetchOneCharacter = async(character) => {
    try {
        const response = await fetch(`${BASE_URL}${character}`);
        if(!response.ok) throw new Error(`Error al encontrar el personaje ${character}`)
        const data = await response.json()
        return data
    
    } catch (error) {
        console.error(error)
    }
}