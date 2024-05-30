// Простой таймер

setInterval(() => {
    let timer = document.getElementById('timer');
    timer.textContent--;
    if (+timer.textContent < 0) {
        alert('Вы выиграли в конкурсе');
        timer.textContent = 59;
    }
}, 1000);



// Вариант 2: в формате HH:MM:SS - моя версия, наверняка не гениальная, но работает)))

// const timer = document.getElementById('timer');
// let hours = '00';
// let minutes = '00';
// let seconds = '59';
// timer.textContent = `${hours}:${minutes}:${seconds}`;


// setInterval(() => {
//     if (+seconds < 10) {
//         seconds = '0' + (+seconds - 1).toString();
//     timer.textContent = `${hours}:${minutes}:${seconds}`;
//     } else {
//         seconds = +seconds - 1;
//     timer.textContent = `${hours}:${minutes}:${seconds}`;
//     }
    

//     if (timer.textContent == '00:00:00') {
//         alert('Вы выиграли в конкурсе');
//         seconds = '59';
//         timer.textContent = `${hours}:${minutes}:${seconds}`;
//     }
// }, 1000);



// Вариант 3 - с загрузкой произвольного файла

// let timerId = setInterval(() => {
//     let timer = document.getElementById('timer');
//     timer.textContent--;
//     if (+timer.textContent == 0) {
//         location.assign('https://kub-24.ru/wp-content/uploads/price_02.03.2020.xlsx')
//         clearInterval(timerId);
//     }
// }, 1000);