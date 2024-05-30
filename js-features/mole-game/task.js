const holes = document.querySelectorAll('.hole');
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');


for (let hole of holes) {
    hole.addEventListener('click', () => {
        if (hole.classList.contains('hole_has-mole')) {
            dead.textContent++;
            if (dead.textContent == 10) {
                dead.textContent = 0;
                lost.textContent = 0;
                alert('Поздравляю! Вы победили!')
            }
        } else {
            lost.textContent++;
            if (lost.textContent == 5) {
                lost.textContent = 0;
                dead.textContent = 0;
                alert('К сожалению, вы проиграли. Попробуйте еще раз!')
            }
        }
    })
}

