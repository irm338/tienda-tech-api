import express from 'express'
import { apilimiter } from './middlewares/ratelimiter.js';
import productosRouters from './routes/productos.routes.js';

const app = express();
app.use(express.json());

// aplicar middlewere de rate limit a las rutas /api/
app.use('/api/', apilimiter);

//Rutas del CRUD
app.use('/api/productos', productosRoutes);

const PORT = 3000;
app.listen(PORT, ()=> {
    console.log('Servidor de la tienda corriendo en http://localhost:${PORT}');

});
