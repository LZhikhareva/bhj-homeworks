const form = document.querySelector('#form');
const progress = document.querySelector('#progress');
const statusText = document.getElementById('status');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formSent = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', progressHandler)
    xhr.upload.addEventListener('load', loadHandler)
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')
    xhr.send(formSent)
});

function progressHandler(event) {
    const percentLoaded = (event.loaded / event.total);
    progress.value = percentLoaded;
}

function loadHandler() {
    console.log('Файл загружен')
}
