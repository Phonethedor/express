import express from 'express';
import { getHome, getAbout } from '../controllers/controller.js';
import { createItem } from '../controllers/fileController.js';

const router = express.Router();

//get
router.get('/', getHome);
router.get('/about', getAbout);

//post
router.post('/create', createItem);

export default router;