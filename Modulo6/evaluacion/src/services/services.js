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
        throw new Error(`No pudimos leer el archivo: ${error}`);
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
        throw new Error('No se encontró el anime');
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
    throw new Error('No se encontró el anime');
}

// Metodos POST con body
export const createAnime = async(data) => {
    const allData = await readFile();
    const id = Object.keys(allData).length + 1;
    const anime = {
        nombre: data.nombre,
        genero: data.genero,
        año: data.año,
        autor: data.autor
    }
    allData[id] = anime;
    await fs.writeFile(dataFilePath, JSON.stringify(allData), 'utf8');
    return anime;
}


// Metodos PUT
export const updateAnime = async(id, data) => {
    const anime = await getAnimeById(id);
    if (anime === undefined) {
        throw new Error('No se encontró el anime');
    } else {
    const newData = {...anime, ...data};
    const allData = await readFile();
    allData[id] = newData;
    await fs.writeFile(dataFilePath, JSON.stringify(allData), 'utf8');
    return newData;
    }
}

// Metodos DELETE
export const deleteAnime = async(id) => {
    const allData = await readFile();
    if (allData[id] === undefined) {
        throw new Error('No se encontró el anime');
    }else{
    delete allData[id];
    await fs.writeFile(dataFilePath, JSON.stringify(allData), 'utf8');
    }
}