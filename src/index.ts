import express from 'express';
import indexRoutes from './routes/index';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(indexRoutes);

app.listen(3000, () => {
    console.log(`Servidor corriendo en el puerto 3000`);
});