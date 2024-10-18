export class Components {
    static oneCardCharacter(character) {
        return `
            <div class = "subCard">
                <div class="subCard__header">
                <h2>${character.name}</h2>
                </div>
                <div class="subCard__body">
                    <p>Estatura: ${character.height} cm. Peso: ${character.mass}kg.</p>
                </div>
            </div>`
    }
}