const textarea = document.querySelector('textarea')
const btn = document.querySelector('button')

textarea.addEventListener('input', (e) => {
    localStorage.setItem('value', e.target.value);
})

btn.addEventListener('click', () => {
    textarea.value = '';
    localStorage.removeItem('value')
})

textarea.value = localStorage.getItem('value');