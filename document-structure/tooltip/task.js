const items = Array.from(document.querySelectorAll('.has-tooltip'));
let tooltips = [];
let activeTip = null;

items.forEach(item => {
    const tooltip = document.createElement('div');
    item.insertAdjacentElement('afterend', tooltip);
    tooltip.classList.add('tooltip');
    tooltip.textContent = item.title;
    tooltip.style.left = `${item.offsetLeft}px`;
    tooltips.push(tooltip);
    item.addEventListener('click', (e) => {
        e.preventDefault();
        if (activeTip) {
            activeTip.classList.remove('tooltip_active');
            activeTip = null;
        } else {
            tooltips.forEach(e => e.classList.remove('tooltip_active'));
            tooltip.classList.add('tooltip_active');
            activeTip = tooltip;
        }
    })
})