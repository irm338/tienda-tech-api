
import { router } from 'express';
import { producto } from '../data/productos.db.js';

const router = router();

// Get:consultar todos los productos
router.get('/', (req, res) =>{
    res.json({
        mensaje:'Cátalogo de productos obtenido exitosamente',
        data: productos

    });

});

// Post: Agregar un nuevo producto
router.post('/', (req, res) => {
    const nuevoProducto = {
        id: producto.length + 1,
        nombre: req.body.nombre,
        precio: req.body.ppprecio,
        stock: req.body.stock

    };
    productos.push(nuevoProucto);
    res.status(201).json({
        mensaje: 'producto agregado exitosamente',
        data: nuevoProducto

    });
});

export default router;
