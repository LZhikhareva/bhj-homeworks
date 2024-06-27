const popUp = document.querySelector('.modal');
const popUpClose = document.querySelector('.modal__close');

popUpClose.addEventListener('click', () => {
    popUp.classList.remove('modal_active');
    document.cookie = "modalClose=yes; path=/";
});

function getCookie(name) {
    let cookieArr = document.cookie.split('; ');
    let cookieObj = {};

    for (let i = 0; i < cookieArr.length; i++) {
        let nv = cookieArr[i].split('=');
        cookieObj[nv[0]] = nv[1];
    }

    return cookieObj[name];
}

if (getCookie('modalClose') !== 'yes') {
    popUp.classList.add('modal_active');
}