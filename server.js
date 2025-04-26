const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Ruta de prueba para simular conexión a base de datos
app.get('/test-db', (req, res) => {
  res.send('✅ Conexión simulada a base de datos exitosa.');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
