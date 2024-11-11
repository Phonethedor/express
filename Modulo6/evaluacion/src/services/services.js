import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataFilePath = path.join(__dirname, '../data/anime.json');

export const readFile = async () => {
    try {
        const data = await fs.readFile(dataFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        throw new Error(`No pudimos leer el archivo: ${error}`)
    }
}

// Metodos GET

export const getAllData = async() => {
    const data = await readFile();
    return data;
}

export const getAnimeById = async(id) => {
    const data = await readFile();
    const anime = data[id];
    if (anime === undefined) {
        throw new Error('No se encontró el anime')
    } else {
        return anime;
    }
}

export const getAnimeByName = async(name) => {
    const data = await readFile();
    let id = 1;
    while (data[id] != undefined) {
        const anime = await getAnimeById(id);
        if (anime.nombre === name) {
            return anime;
        }
        id++;
    }
    return anime;
}