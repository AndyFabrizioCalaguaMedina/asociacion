const express = require('express');
const path = require('path');
const app = express();

// Configuración del motor de plantillas EJS
app.set('view engine', 'ejs');

// Configuración de la carpeta 'views' donde se encuentran los archivos .ejs
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos como CSS, imágenes, etc.
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la vista de inicio (index)
app.get('/', (req, res) => {
  res.render('index'); // Esto renderiza 'index.ejs'
});

// Ruta para servicios
app.get('/servicios', (req, res) => {
  res.render('servicios'); // Esto renderiza 'servicios.ejs'
});

// Ruta para contacto
app.get('/contacto', (req, res) => {
  res.render('contacto'); // Esto renderiza 'servicios.ejs'
});

// Ruta para matricula
app.get('/matricula', (req, res) => {
  res.render('matricula'); // Esto renderiza 'servicios.ejs'
});

// Ruta para matricula
app.get('/nosotros', (req, res) => {
  res.render('nosotros'); // Esto renderiza 'servicios.ejs'
});

// Iniciar el servidor en el puerto 3000
app.listen(2000, () => {
  console.log('Servidor corriendo en http://localhost:2000');
});
