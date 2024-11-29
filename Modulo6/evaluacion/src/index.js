import express from 'express';
import router from './routes/routes.js';

export const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
}); 

export default app;