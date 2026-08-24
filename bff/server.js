const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.get('/api/saludo', (req, res) => {
    res.json({ mensaje: '¡Hola Mundo!' });
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date() });
});

// Servir archivos estáticos del frontend
app.use(express.static('../frontend'));

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo salió mal en el servidor' });
});

app.listen(PORT, () => {
    console.log(`Servidor BFF corriendo en puerto ${PORT}`);
    console.log(`Frontend disponible en http://localhost:${PORT}`);
});
