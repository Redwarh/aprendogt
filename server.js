const express = require('express'); 
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const mediaFolderPath = path.join(__dirname, 'media');
const mediaFolderPath_com1 = path.join(__dirname, '1/media');
const mediaFolderPath2_form = path.join(__dirname, '2/media_form');
const mediaFolderPath2_comu = path.join(__dirname, '2/media_comu');
const mediaFolderPath2_mate = path.join(__dirname, '2/media_mate');
const mediaFolderPath2_medio = path.join(__dirname, '2/media_medio');
const mediaFolderPath2_expre = path.join(__dirname, '2/media_expre');
const mediaFolderPath2_fisi = path.join(__dirname, '2/media_fisi');
const videosFolderPath = path.join(__dirname, 'videos');
const videosFolderPath1 = path.join(__dirname, '1/vid');
const videosFolderPath2_comu = path.join(__dirname, '2/vid_comu');
const videosFolderPath2_mate = path.join(__dirname, '2/vid_mate');
const videosFolderPath2_medio = path.join(__dirname, '2/vid_medio');
const videosFolderPath2_expre = path.join(__dirname, '2/vid_expre');
const videosFolderPath2_fisi = path.join(__dirname, '2/vid_fisi');
const videosFolderPath2_form = path.join(__dirname, '2/vid_form');

app.use(express.static(__dirname));
app.use('/media', express.static(mediaFolderPath));
app.use('/1/media', express.static(mediaFolderPath_com1));
app.use('/videos', express.static(videosFolderPath));
app.use('/1/vid', express.static(videosFolderPath1));
app.use('/2/vid', express.static(videosFolderPath2_comu));
app.use('/2/vid', express.static(videosFolderPath2_mate));
app.use('/2/vid', express.static(videosFolderPath2_medio));
app.use('/2/vid', express.static(videosFolderPath2_expre));
app.use('/2/vid', express.static(videosFolderPath2_fisi));
app.use('/2/vid', express.static(videosFolderPath2_form));

app.get('/api/files', (req, res) => {
    fs.readdir(mediaFolderPath, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Error leyendo la carpeta' });
        }
        const fileList = files.filter(file => {
            return file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.pdf');
        });
        res.json(fileList);
    });
});

app.get('/api/files_com1', (req, res) => {
    fs.readdir(mediaFolderPath_com1, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Error leyendo la carpeta' });
        }
        const fileList = files.filter(file => {
            return file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.pdf');
        });

        res.json(fileList);
    });
});

app.get('/api/files2_comu', (req, res) => {
    fs.readdir(mediaFolderPath2_comu, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Error leyendo la carpeta' });
        }
        const fileList = files.filter(file => {
            return file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.pdf');
        });

        res.json(fileList);
    });
});


app.get('/api/files2_mate', (req, res) => {
    fs.readdir(mediaFolderPath2_mate, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Error leyendo la carpeta' });
        }
        const fileList = files.filter(file => {
            return file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.pdf');
        });

        res.json(fileList);
    });
});


app.get('/api/files2_medio', (req, res) => {
    fs.readdir(mediaFolderPath2_medio, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Error leyendo la carpeta' });
        }
        const fileList = files.filter(file => {
            return file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.pdf');
        });

        res.json(fileList);
    });
});


app.get('/api/files2_expre', (req, res) => {
    fs.readdir(mediaFolderPath2_expre, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Error leyendo la carpeta' });
        }
        const fileList = files.filter(file => {
            return file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.pdf');
        });

        res.json(fileList);
    });
});

app.get('/api/files2_fisi', (req, res) => {
    fs.readdir(mediaFolderPath2_fisi, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Error leyendo la carpeta' });
        }
        const fileList = files.filter(file => {
            return file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.pdf');
        });

        res.json(fileList);
    });
});

app.get('/api/files2_form', (req, res) => {
    fs.readdir(mediaFolderPath2_form, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Error leyendo la carpeta' });
        }
        const fileList = files.filter(file => {
            return file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.pdf');
        });

        res.json(fileList);
    });
});


app.get('/api/videos', (req, res) => {
    fs.readdir(videosFolderPath, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Error leyendo la carpeta de videos' });
        }
        // Filtrar solo archivos de video
        const videoList = files.filter(file => {
            return file.endsWith('.mp4'); // Cambia la extensión si tienes otros tipos de videos
        });

        res.json(videoList);
    });
});



// API para obtener la lista de videos
app.get('/api/videos1', (req, res) => {
    fs.readdir(videosFolderPath1, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Error leyendo la carpeta de videos' });
        }
        // Filtrar solo archivos de video
        const videoList = files.filter(file => {
            return file.endsWith('.mp4'); // Cambia la extensión si tienes otros tipos de videos
        });

        res.json(videoList);
    });
});

// API para obtener la lista de videos
app.get('/api/videos2_comu', (req, res) => {
    fs.readdir(videosFolderPath2_comu, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Error leyendo la carpeta de videos' });
        }
        // Filtrar solo archivos de video
        const videoList = files.filter(file => {
            return file.endsWith('.mp4'); // Cambia la extensión si tienes otros tipos de videos
        });

        res.json(videoList);
    });
});

// API para obtener la lista de videos
app.get('/api/videos2_mate', (req, res) => {
    fs.readdir(videosFolderPath2_mate, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Error leyendo la carpeta de videos' });
        }
        // Filtrar solo archivos de video
        const videoList = files.filter(file => {
            return file.endsWith('.mp4'); // Cambia la extensión si tienes otros tipos de videos
        });

        res.json(videoList);
    });
});

// API para obtener la lista de videos
app.get('/api/videos2_medio', (req, res) => {
    fs.readdir(videosFolderPath2_medio, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Error leyendo la carpeta de videos' });
        }
        // Filtrar solo archivos de video
        const videoList = files.filter(file => {
            return file.endsWith('.mp4'); // Cambia la extensión si tienes otros tipos de videos
        });

        res.json(videoList);
    });
});

// API para obtener la lista de videos
app.get('/api/videos2_expre', (req, res) => {
    fs.readdir(videosFolderPath2_expre, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Error leyendo la carpeta de videos' });
        }
        // Filtrar solo archivos de video
        const videoList = files.filter(file => {
            return file.endsWith('.mp4'); // Cambia la extensión si tienes otros tipos de videos
        });

        res.json(videoList);
    });
});

// API para obtener la lista de videos
app.get('/api/videos2_fisi', (req, res) => {
    fs.readdir(videosFolderPath2_fisi, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Error leyendo la carpeta de videos' });
        }
        // Filtrar solo archivos de video
        const videoList = files.filter(file => {
            return file.endsWith('.mp4'); // Cambia la extensión si tienes otros tipos de videos
        });

        res.json(videoList);
    });
});

// API para obtener la lista de videos
app.get('/api/videos2_form', (req, res) => {
    fs.readdir(videosFolderPath2_form, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Error leyendo la carpeta de videos' });
        }
        // Filtrar solo archivos de video
        const videoList = files.filter(file => {
            return file.endsWith('.mp4'); // Cambia la extensión si tienes otros tipos de videos
        });

        res.json(videoList);
    });
});


// Servir la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
