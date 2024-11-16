document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery');
    const searchInput = document.getElementById('search');

    fetch('/api/files')
        .then(response => response.json())
        .then(files => {
            let items = files.map(file => ({
                filePath: `/media/${file}`,
                description: file.replace(/\.[^/.]+$/, "") 
            }));
            items.forEach(createGalleryItem);
            searchInput.addEventListener('input', function () {
                const filter = searchInput.value.toLowerCase();
                gallery.innerHTML = '';
                items
                    .filter(item => item.description.toLowerCase().includes(filter))
                    .forEach(createGalleryItem);
            });
        });
    function createGalleryItem(item) {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('gallery-item');

        const imgElement = document.createElement('img');

        if (item.filePath.endsWith('.pdf')) {
            const thumbnailPath = `/img/${item.description}.png`;

            fetch(thumbnailPath)
                .then(response => {
                    if (response.ok) {
                        imgElement.src = thumbnailPath;
                    } else {
                        imgElement.src = 'pdf-icon.png';
                    }
                })
                .catch(() => {
                    imgElement.src = 'pdf-icon.png';
                });
        } else {
            imgElement.src = item.filePath;
        }
        imgElement.alt = item.description;
        imgElement.title = item.description;

        imgElement.addEventListener('click', () => openModal(item.filePath, item.description));

        const descriptionElement = document.createElement('p');
        descriptionElement.classList.add('gallery-description');
        descriptionElement.textContent = item.description;

        itemContainer.appendChild(imgElement);
        itemContainer.appendChild(descriptionElement);
        gallery.appendChild(itemContainer);
    }

    // Modal
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalPdf = document.getElementById('modal-content');
    const modalCaption = document.getElementById('modal-caption');

    function openModal(filePath, description) {
        modal.style.display = 'block';
        modalCaption.innerHTML = description;

        if (filePath.endsWith('.pdf')) {
            modalPdf.style.display = 'block';
            modalImg.style.display = 'none';
            modalPdf.src = filePath;
        } else {
            modalImg.style.display = 'block';
            modalPdf.style.display = 'none';
            modalImg.src = filePath;
        }
    }

    window.closeModal = function () {
        modal.style.display = 'none';
    };
	
	
        // Funciones para ocultar y mostrar el header
        function hideHeader() {
            document.getElementById('page-header').style.display = 'none';
        };

        function showHeader() {
            document.getElementById('page-header').style.display = 'block';
        };

    // Menú desplegable
    window.toggleMenu = function () {
        const menu = document.getElementById('hamburger-menu');
        menu.classList.toggle('active');
    };
});
