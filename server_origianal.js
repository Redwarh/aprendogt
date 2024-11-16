const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const folderPath = path.join(__dirname, 'media');  // Ruta a la carpeta que contiene las imágenes y PDFs

// Sirve archivos estáticos desde la raíz, para CSS, JS y otros archivos públicos
app.use(express.static(__dirname));

// Hacer que los archivos estáticos de la carpeta 'media' sean accesibles
app.use('/media', express.static(folderPath));

// API para obtener la lista de archivos
app.get('/api/files', (req, res) => {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Error leyendo la carpeta' });
        }
        // Filtrar solo imágenes y PDFs
        const fileList = files.filter(file => {
            return file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.pdf');
        });

        res.json(fileList);
    });
});

// Servir la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
