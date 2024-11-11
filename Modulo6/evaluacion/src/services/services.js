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

export const getAllData = async() => {
    const data = await readFile()
    return data
}