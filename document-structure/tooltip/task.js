const items = Array.from(document.querySelectorAll('.has-tooltip'));
let tooltips = [];
let activeTip = document.querySelector('.tooltip_active')
// console.log(activeTip.offsetHeight)

items.forEach(item => {
    const tooltip = document.createElement('div');
        item.appendChild(tooltip);
        tooltip.classList.add('tooltip')
        tooltip.textContent = item.title; 
        tooltip.style.left = `${item.offsetLeft}px`;
        tooltips.push(tooltip);

    item.addEventListener('click', (e) => {
        e.preventDefault();
        tooltips.forEach(e => e.classList.remove('tooltip_active'));
        tooltip.classList.add('tooltip_active');
    })
})