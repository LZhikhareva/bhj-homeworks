const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
const speed = document.getElementById('clicker__speed');
let timeStart = new Date();


cookie.addEventListener('click', () => {
    counter.textContent ++;
    if (cookie.width === 200) {
        cookie.width = 250;
    } else {
        cookie.width = 200;
    }
    let timeNow = new Date();
    speed.textContent = (1 / (((timeNow.getTime() / 1000) - (timeStart.getTime() / 1000)))).toFixed(2);
    timeStart = new Date();
    
})

