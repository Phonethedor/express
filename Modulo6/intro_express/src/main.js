import express from 'express';
import router from './routes/routes.js';

// Crear una instancia de express y asignarla a la constante app llamada asi por convencion
const app = express();
const PORT = 3000;

// Middleware son funciones que se ejecutan antes de llegar a las rutas y posterior  la peticion
//entre request y el  response
// Middleware para parsear JSON y datos URL-encoded
app.use(express.json());
// Middleware para codificar una request multiformato
app.use(express.urlencoded({ extended: true }));
//primero van los de parseo y luego los de rutas
app.use('/api/v1', router);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});