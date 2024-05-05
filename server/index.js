

const express = require('express');
const { Ruta } = require('./models'); 

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Ruta para obtener la primera ruta
app.get('/rutas', async (req, res) => {
  try {
    const ruta = await Ruta.findOne(); // Consulta todas las rutas en la base de datos
    res.json(ruta); // Devuelve las rutas como respuesta en formato JSON
  } catch (error) {
    console.error('Error al obtener las rutas:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}.`);
});
