// Este archivo maneja la lógica para cargar los videos en la galería
// Se conecta al servidor para obtener los archivos de video de la carpeta /videos

document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById('gallery-videos');

    // Obtener la lista de videos desde la API
    fetch('/api/videos')
        .then(response => response.json())
        .then(videos => {
            videos.forEach(video => {
                const videoName = video.split('.').slice(0, -1).join('.'); // Obtener el nombre del video sin extensión
                const item = document.createElement('div');
                item.classList.add('gallery-item');

                // Crear miniatura
                const thumbnail = document.createElement('img');
                thumbnail.src = `img_vid/${videoName}.jpg`; // Usar la miniatura de video
                thumbnail.alt = videoName;

                // Abrir el modal al hacer clic en la miniatura
                thumbnail.onclick = function() {
                    openModal(`videos/${video}`); // Cambiar a la ruta del video
                };

                const desc = document.createElement('div');
                desc.classList.add('gallery-description');
                desc.innerText = videoName; // Usar el nombre del video como descripción

                item.appendChild(thumbnail);
                item.appendChild(desc);
                gallery.appendChild(item);
            });
        })
        .catch(error => console.error('Error al cargar los videos:', error));
});

// Abrir el modal
function openModal(videoPath) {
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    modalVideo.src = videoPath;
    modal.style.display = "block"; // Mostrar modal
    modalVideo.play(); // Reproducir video
}

// Cerrar el modal
function closeModal() {
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    modal.style.display = "none"; // Ocultar modal
    modalVideo.pause(); // Pausar video
    modalVideo.src = ""; // Limpiar la fuente del video
}

// Cerrar al hacer clic fuera del video
window.onclick = function(event) {
    const modal = document.getElementById('video-modal');
    const modalContent = document.querySelector('.modal-content');

    // Cerrar si el clic es en el modal pero fuera del contenido del video
    if (event.target === modal && !modalContent.contains(event.target)) {
        closeModal();
    }
}
