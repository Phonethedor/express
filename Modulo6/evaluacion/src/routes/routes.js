import express from 'express'
import { 
    getAllItems, 
    getItemById, 
    getItemByName, 
    createItem, 
    updateItem , 
    deleteItem 
    } from '../controllers/fileController.js';


const router = express.Router();

// Metodos GET
router.get('/anime', getAllItems);
router.get('/anime/:id', getItemById);
router.get('/anime/nombre/:nombre', getItemByName);
// Metodo POST
router.post('/anime', createItem);
// Metodo PUT
router.put('/anime/:id', updateItem);
// Metodo DELETE
router.delete('/anime/:id', deleteItem);

export default router;