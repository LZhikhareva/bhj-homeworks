const rotators = Array.from(document.querySelectorAll('.rotator__case'));
let activeNum = 0;
let speed = 0;

function rotate(rotators) {
    clearInterval(interval);
    for (let rotator of rotators) {
      rotator.className = 'rotator__case'
    }
    activeNum++

    if (activeNum === rotators.length) {
        activeNum = 0;
    }

    rotators[activeNum].classList.add('rotator__case_active');
    rotators[activeNum].style.color = rotators[activeNum].dataset.color;
    speed = rotators[activeNum].dataset.speed;
    interval = setInterval(rotate, speed, rotators);
}

let interval = setInterval(rotate, speed, rotators);