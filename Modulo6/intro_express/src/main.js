import express from 'express';
import router from './routes/routes.js';

// Crear una instancia de express y asignarla a la constante app llamada asi por convencion
const app = express();
const PORT = 3000;

// Middleware son funciones que se ejecutan antes de llegar a las rutas y posterior  la peticion
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});