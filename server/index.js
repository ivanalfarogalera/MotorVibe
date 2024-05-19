

const express = require('express');
const cors = require('cors');
const { Ruta } = require('./models'); 

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({
  origin: 'http://localhost:3000' // Reemplaza esto con el origen de tu aplicación React
}));

app.use(express.json());

// Ruta para obtener la primera ruta
app.get('/ruta', async (req, res) => {
  try {
    const ruta = await Ruta.findOne(); // Consulta todas las rutas en la base de datos
    res.json(ruta); // Devuelve las rutas como respuesta en formato JSON
  } catch (error) {
    console.error('Error al obtener las rutas:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Ruta para obtener todas las ruta
app.get('/rutas', async (req, res) => {
  try {
    const ruta = await Ruta.findAll(); // Consulta todas las rutas en la base de datos
    res.json(ruta); // Devuelve las rutas como respuesta en formato JSON
  } catch (error) {
    console.error('Error al obtener las rutas:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Ruta para crear una nueva ruta
app.post('/nuevaruta', async (req, res) => {
  try {
    // Obtener los datos enviados en el cuerpo de la solicitud
    const { iniciolatitud, iniciolongitud, finlatitud, finlongitud, nombre, descripcion } = req.body;

    // Crear una nueva ruta en la base de datos
    const nuevaruta = await Ruta.create({
      iniciolatitud,
      iniciolongitud,
      finlatitud,
      finlongitud,
      nombre,
      descripcion
    });

    // Devolver la nueva ruta creada como respuesta en formato JSON
    res.status(201).json(nuevaruta);
  } catch (error) {
    console.error('Error al crear la ruta:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Ruta para eliminar una ruta existente
app.delete('/eliminarruta/:id', async (req, res) => {
  try {
    // Obtener el ID de la ruta a eliminar desde los parámetros de la URL
    const rutaId = req.params.id;
    const ruta = await Ruta.findByPk(rutaId);
    // Verificar si la ruta existe
    if (!ruta) {
      return res.status(404).json({ message: 'La ruta no fue encontrada' });
    }
    await ruta.destroy();
    res.json({ message: 'La ruta fue eliminada exitosamente' });
  } catch (error) {
    console.error('Error al eliminar la ruta:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});



app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}.`);
});
