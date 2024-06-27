const popup = document.querySelector('.modal');
const popupClose = document.querySelector('.modal__close');

popup.classList.add('modal_active');

popupClose.addEventListener('click', () => {
    popup.classList.remove('modal_active');
    document.cookie = "modal__close=yes; path=/;";
});

function getCookie(name) {
    let cookie_arr = document.cookie.split('; ');
    let cookie_obj = {};

    for (let i = 0; i < cookie_arr.length; i++) {
        let nv = cookie_arr[i].split('=');
        cookie_obj[nv[0]] = nv[1];
    }

    return cookie_obj[name];
}

if (getCookie('modal__close') === 'yes') {
    popup.classList.remove('modal_active');
}