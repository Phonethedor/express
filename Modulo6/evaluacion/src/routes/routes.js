import express from 'express'
import { getAllItems, getItemById, getItemByName } from '../controllers/fileController.js';


const router = express.Router();

router.get('/anime', getAllItems);
router.get('/anime/:id', getItemById);
router.get('/anime/nombre/:nombre', getItemByName);

export default router;