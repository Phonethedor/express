import express from 'express'
import { getAllItems } from '../controllers/fileController.js';


const router = express.Router();

router.get('/data', getAllItems);

export default router;