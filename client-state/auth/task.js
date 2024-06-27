const form = document.querySelector('#signin__form');
const signIn = document.querySelector('.signin');
const card = document.querySelector('.card')
const body = document.querySelector('body')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formSent = new FormData(form);

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            const response = JSON.parse(xhr.responseText);
            if (response.success == true) {
                const welcome = document.querySelector('.welcome');
                const userId = document.querySelector('#user_id');
                userId.textContent = response.user_id

                localStorage.setItem('id', response.user_id);

                signIn.classList.remove('signin_active');
                welcome.classList.add('welcome_active');


            } else {
                console.log('неверный логин и пароль');
                const popupContainer = document.createElement('div');
                popupContainer.classList.add('popup_container');
                body.appendChild(popupContainer);

                const popup = document.createElement('div');
                popup.classList.add('popup');
                popup.classList.add('popup_active');
                popupContainer.appendChild(popup);

                const popupText = document.createElement('p');
                popupText.classList.add('popup_text');
                popupText.textContent = 'Неверный логин/пароль!';
                popup.appendChild(popupText);

                const popupBtn = document.createElement('button');
                popupBtn.classList.add('popup_button')
                popupBtn.textContent = "Закрыть";
                popup.appendChild(popupBtn);

                popupBtn.addEventListener('click', () => {
                    popupContainer.remove();
                })
            }
        } else {
            console.error('Ошибка при получении ответа от сервера');
        }
    });

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth')
    xhr.send(formSent)
})

if (localStorage.getItem('id')) {
    const welcome = document.querySelector('.welcome');
    const userId = document.querySelector('#user_id');
    userId.textContent = localStorage.getItem('id');

    signIn.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
}