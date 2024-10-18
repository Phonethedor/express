export class Render{
    static oneCardCharacter = (contenedor, cardCharacter) => {
        contenedor.insertAdjacentHTML('beforeend', cardCharacter);
    }
}