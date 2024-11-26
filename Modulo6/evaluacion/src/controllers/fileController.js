import { getAllData, getAnimeById, getAnimeByName, createAnime, deleteAnime } from "../services/services.js";


// Metodos GET
export const getAllItems = async(req, res) => {
    try {
        const anime = await getAllData()
        
        res.status(200).json({
            message: 'Anime encontrados con éxito',
            status: 200,
            anime
        })
    } catch (error) {
        res.status(404).json({
            message: 'No se encontró el anime',
            status: 404,
            error
        })
    }
}

export const getItemById = async(req, res) => {
    try {
        const id = req.params.id;
        const anime = await getAnimeById(id);
        
        res.status(200).json({
            message: 'Anime encontrado con éxito',
            status: 200,
            anime
        })
    } catch (error) {
        res.status(404).json({
            message: 'No se encontró el anime',
            status: 404,
            error
        })
    }
}

export const getItemByName = async(req, res) => {
    try {
        const name = req.params.nombre;
        const anime = await getAnimeByName(name);

        res.status(200).json({
            message: 'Anime encontrado con éxito',
            status: 200,
            anime
        })
    } catch (error) {
        res.status(404).json({
            message: 'No se encontró el anime es',
            status: 404,
            error
        })
    }
}

// Metodo POST
export const createItem = async(req, res) => {
    try {
        const data = req.body;
        const anime = await createAnime(data);

        res.status(201).json({
            message: 'Anime creado con éxito',
            status: 201,
            anime
        })
    } catch (error) {
        res.status(400).json({
            message: 'No se pudo crear el anime',
            status: 400,
            error
        })
    }
}


// Metodo PUT



// Metodo DELETE
export const deleteItem = async(req, res) => {
    try {
        const id = req.params.id;
        const anime = await deleteAnime(id);

        res.status(200).json({
            message: 'Anime eliminado con éxito',
            status: 200,
            anime
        })
    } catch (error) {
        res.status(404).json({
            message: 'No se pudo eliminar el anime',
            status: 404,
            error
        })
    }
}