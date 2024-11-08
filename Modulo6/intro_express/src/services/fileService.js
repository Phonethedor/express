import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataFilePath = path.join(__dirname, '../data/data.json');

export const createFile = async (data) => {
    try{
        await fs.mkdir(path.join(__dirname, '../data'), { recursive: true });

        await fs.writeFile(dataFilePath, JSON.stringify(data), 'utf-8', (err) => {
            if (err) throw err;
            console.log('File created successfully');
        });
    } catch (error) {
        console.error('Error creating file', error);
    }
}

export const createData = async (data) => {
    await createFile(data);
}
